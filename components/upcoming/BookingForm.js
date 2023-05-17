import {
  Fragment,
  cloneElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import InputText from "../ui/InputText";
import NotificationContext from "../../store/notificationContext";
import ModalContext from "../../store/modalContext";
import { callApi } from "../../utils/apiUtils";
import NewRetreateeFields from "./NewRetreateeFields";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";
import { v4 as uuidv4 } from "uuid";
import InputSelect from "../ui/InputSelect";
import NewRetreatInfo from "./NewRetreatInfo";

export default function BookingForm(props) {
  const { closeModal } = useContext(ModalContext);
  const notificationCtx = useContext(NotificationContext);
  const {
    baseClass,
    classes,
    retreat,
    queryMsg,
    isModal,
    modalCaption,
    modalTitle,
  } = props;
  const { selectOptions, retreatOptions } = retreat;
  const [allRetreateeDetails, setAllRetreateeDetails] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [retreateeFields, setRetreateeFields] = useState([]);
  const [refresh, setRefresh] = useState();
  const msgInputRef = useRef();
  const retreatRef = useRef();

  const getRetreateeDetailsHandler = (retreateeDetails) => {
    setAllRetreateeDetails((oldAllRetreateeDetails) => {
      return { ...oldAllRetreateeDetails, ...retreateeDetails };
    });
  };

  const onAddRetreatee = (event) => {
    event.preventDefault();
    setRetreateeFields((oldRetreateeFields) => {
      const newRetreateeFields = [...oldRetreateeFields];
      newRetreateeFields.push(
        <NewRetreateeFields
          classes={classes}
          baseClass={baseClass}
          selectOptions={selectOptions}
          retreatOptions=""
          onValidated={getRetreateeDetailsHandler}
          hasNationality={true}
          retreateeIdx={uuidv4()}
          key={uuidv4()}
        />
      );
      return newRetreateeFields;
    });
    setRefresh((oldRefresh) => !oldRefresh);
  };

  const deleteRetreateeHandler = useCallback(
    (event) => {
      event.preventDefault();
      const idxToDelete = event.target.getAttribute("idx");

      setRetreateeFields((oldRetreateeFields) => {
        const filteredRetreateeFields = oldRetreateeFields.filter(
          (jsxRetreatee) => jsxRetreatee.props.retreateeIdx !== idxToDelete
        );
        return filteredRetreateeFields;
      });
      setAllRetreateeDetails((oldAllRetreateeDetails) => {
        const filteredRetreateeDetails = { ...oldAllRetreateeDetails };
        delete filteredRetreateeDetails[idxToDelete];
        return filteredRetreateeDetails;
      });
      setRefresh((oldRefresh) => !oldRefresh);
    },
    [retreateeFields]
  );

  useEffect(() => {
    setRetreateeFields((oldRetreateeFields) => {
      const newRetreateeFields = oldRetreateeFields.map((jsxRetreatee, idx) =>
        cloneElement(jsxRetreatee, {
          onDeleteRetreatee: deleteRetreateeHandler,
          retreateeCounter: idx + 1,
        })
      );
      return newRetreateeFields;
    });
  }, [refresh]);

  useEffect(() => {
    for (const idx in allRetreateeDetails) {
      if (!allRetreateeDetails[idx].retreateeValid) {
        setFormValid(() => false);
        break;
      }
      setFormValid(() => true);
    }
  }, [setFormValid, allRetreateeDetails]);

  let inputRetreatOptions = [];

  for (let key in retreatOptions) {
    let options = retreatOptions[key];
    const className = !key.includes("-") ? key : key;
    const labelName = !key.includes("-") ? key : key.replace("-", " ");

    inputRetreatOptions.push(
      <InputSelect
        key={key}
        inputGroupClass={
          classes[`${baseClass}--retreatee--${className}--group`]
        }
        inputClass={classes[`${baseClass}--retreatee--${className}`]}
        inputName={key}
        inputOptions={options}
        labelClass={classes[`${baseClass}--retreatee--${className}--label`]}
        label={labelName}
        optionClass={classes[`${baseClass}--retreatee--${className}--option`]}
        selectRef={retreatRef}
      />
    );
  }

  async function bookingHandler(event) {
    event.preventDefault();

    const [retreatId, retreatStrDate] = retreatRef.current.value.split(",");

    const result = await callApi({
      url: "/api/registerBooking",
      method: "POST",
      body: {
        retreatId,
        allRetreateeDetails,
        message: msgInputRef.current.value,
      },
    });

    if (!result.ok) {
      const errorNotification = await result.json();
      notificationCtx.showNotification(errorNotification);
    }

    if (result.ok) {
      const successNotification = await result.json();
      closeModal();
      notificationCtx.showNotification(successNotification);

      await callApi({
        url: "/api/sendBookingConfirmation",
        method: "POST",
        body: {
          retreat,
          retreatStrDate,
          referenceId: successNotification.referenceId,
          idToUpdate: successNotification.insertedId,
          mainRetreatee: successNotification.mainRetreatee,
          additionalRetreatees: successNotification.additionalRetreatees,
        },
      });
    }
  }

  return (
    <section className={classes[`${baseClass}--aside`]}>
      <h3 className={classes[`${baseClass}--aside--title`]}>{modalTitle}</h3>
      <span className={classes[`${baseClass}--aside--info--caption`]}>
        {modalCaption}
      </span>
      <form action="#" className={classes[`${baseClass}--form`]}>
        {inputRetreatOptions}
        <div className={classes[`${baseClass}--aside--info--grid`]}>
          <NewRetreatInfo
            classes={classes}
            baseClass={`${baseClass}--aside--info`}
            retreat={retreat}
            isModal={isModal}
          />
        </div>
        <NewRetreateeFields
          classes={classes}
          baseClass={baseClass}
          onValidated={getRetreateeDetailsHandler}
          retreateeIdx={"main"}
          selectOptions={selectOptions}
          hasNationality={true}
        />
        <div className={classes[`${baseClass}--form--title--box`]}>
          <span className={classes[`${baseClass}--form--title`]}>
            Additional Retreatees
          </span>
          <LinkButton
            onClick={onAddRetreatee}
            btnClass={classes[`${baseClass}--form--icon--btn`]}
          >
            <Icon
              iconClass={classes[`${baseClass}--form--icon`]}
              iconName={"icon-plus"}
            />
          </LinkButton>
        </div>
        {retreateeFields}
        <div className={classes[`${baseClass}--form--title--box`]}>
          <span className={classes[`${baseClass}--form--title`]}>
            Any other queries?
          </span>
        </div>
        {queryMsg ? (
          <span className={classes[`${baseClass}--form--query-msg`]}>
            {queryMsg}
          </span>
        ) : (
          ""
        )}
        <InputText
          label="Message"
          type="textarea"
          inputName="upcoming--form--message"
          inputPlaceholder="Message"
          inputRef={msgInputRef}
          inputGroupClass={classes[`${baseClass}--form--message`]}
          inputClass={classes[`${baseClass}--form--message--input`]}
          labelClass={classes[`${baseClass}--form--message--label`]}
          rows="3"
        />
        <button
          className={classes[`${baseClass}--form--btn`]}
          onClick={bookingHandler}
          disabled={!formValid}
        >
          Register
        </button>
      </form>
    </section>
  );
}
