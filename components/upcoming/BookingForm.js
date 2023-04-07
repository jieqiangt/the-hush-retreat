import { useRouter } from "next/router";
import {
  Fragment,
  cloneElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import InputBar from "../ui/InputBar";
import NotificationContext from "../../store/notificationContext";
import ModalContext from "../../store/modalContext";
import { callApi } from "../../utils/apiUtils";
import NewRetreateeFields from "./NewRetreateeFields";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";
import { v4 as uuidv4 } from "uuid";

export default function BookingForm(props) {
  const { closeModal } = useContext(ModalContext);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const { baseClass, classes, retreatDetails } = props;
  const [allRetreateeDetails, setAllRetreateeDetails] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [retreateeFields, setRetreateeFields] = useState([]);
  const [refresh, setRefresh] = useState();
  const msgInputRef = useRef();

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
          onValidated={getRetreateeDetailsHandler}
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
        console.log({ filteredRetreateeDetails });
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
          num: idx + 1,
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

  async function bookingHandler(event) {
    event.preventDefault();

    const result = await callApi({
      url: "/api/registerBooking",
      method: "POST",
      body: {
        retreatIdStr: retreatDetails.retreatId,
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

      await callApi({
        url: "/api/sendBookingConfirmation",
        method: "POST",
        body: {
          retreatIdStr: retreatDetails.retreatId,
          allRetreateeDetails,
          insertedId: successNotification.insertedId,
        },
      });

      closeModal();
      router.replace("/");
      notificationCtx.showNotification(successNotification);
    }
  }

  return (
    <Fragment>
      <form action="#" className={classes[`${baseClass}--form`]}>
        <NewRetreateeFields
          classes={classes}
          baseClass={baseClass}
          onValidated={getRetreateeDetailsHandler}
          retreateeIdx={"main"}
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
        <InputBar
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
    </Fragment>
  );
}
