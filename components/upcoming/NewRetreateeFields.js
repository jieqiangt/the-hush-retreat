import { useEffect, useReducer } from "react";
import InputBar from "../ui/InputBar";
import InputOptions from "../ui/InputOptions";
import {
  newRetreateeInitialState,
  newRetreateeReducer,
} from "../../reducers/newRetreateeReducer";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";

export default function NewRetreateeFields(props) {
  const [newRetreateeState, dispatchNewRetreatee] = useReducer(
    newRetreateeReducer,
    newRetreateeInitialState
  );

  const {
    firstNameValid,
    lastNameValid,
    emailValid,
    phoneValid,
    retreateeValid,
  } = newRetreateeState;

  const {
    classes,
    baseClass,
    onValidated,
    onDeleteRetreatee,
    retreateeIdx,
    num,
  } = props;

  const fields = {
    firstName: newRetreateeState.firstName,
    lastName: newRetreateeState.lastName,
    email: newRetreateeState.email,
    phone: newRetreateeState.phone,
    vaccinated: newRetreateeState.vaccinated,
  };

  const changeHandlers = {};

  for (let field in fields) {
    changeHandlers[field] = function (event) {
      let inputParams = { type: "INPUT", field: field };
      inputParams[field] = event.target.checked
        ? event.target.checked
        : event.target.value;

      dispatchNewRetreatee(inputParams);
    };
  }
  const valFieldHandlers = {};

  for (let field in fields) {
    valFieldHandlers[field] = function () {
      const timerId = setTimeout(() => {
        let inputParams = { type: "FIELD_VAL", field: field };
        inputParams[field] = fields[field];
        dispatchNewRetreatee(inputParams);
      }, 500);

      return () => {
        clearTimeout(timerId);
      };
    };
  }

  useEffect(valFieldHandlers["firstName"], [
    dispatchNewRetreatee,
    fields.firstName,
  ]);
  useEffect(valFieldHandlers["lastName"], [
    dispatchNewRetreatee,
    fields.lastName,
  ]);
  useEffect(valFieldHandlers["email"], [dispatchNewRetreatee, fields.email]);
  useEffect(valFieldHandlers["phone"], [dispatchNewRetreatee, fields.phone]);
  useEffect(valFieldHandlers["vaccinated"], [
    dispatchNewRetreatee,
    fields.vaccinated,
  ]);

  useEffect(() => {
    const newRetreateeOutput = {};
    newRetreateeOutput[retreateeIdx] = newRetreateeState;
    onValidated(newRetreateeOutput);
  }, [retreateeValid, newRetreateeState]);

  const radioOptions = [
    {
      name: `vaccinated--${retreateeIdx}`,
      value: "",
      label: "I acknowledge that I am fully vaccinated.",
      onChange: changeHandlers["vaccinated"],
    },
  ];

  return (
    <div className={classes[`${baseClass}--retreatee`]}>
      {retreateeIdx !== "main" ? (
        <div className={classes[`${baseClass}--retreatee--header`]}>
          <span className={classes[`${baseClass}--retreatee--title`]}>
            {"Retreatee"} &#8212; {`${num}`}
          </span>
          <LinkButton
            idx={retreateeIdx}
            onClick={onDeleteRetreatee}
            btnClass={classes[`${baseClass}--retreatee--btn`]}
          >
            <Icon
              idx={retreateeIdx}
              iconClass={classes[`${baseClass}--retreatee--icon`]}
              iconName={"icon-cross"}
            />
          </LinkButton>
        </div>
      ) : (
        <div className={classes[`${baseClass}--retreatee--header`]}>
          <span className={classes[`${baseClass}--retreatee--title`]}>
            Main Retreatee
          </span>
        </div>
      )}
      <div className={classes[`${baseClass}--retreatee--fields`]}>
        <InputBar
          label="First Name"
          type="text"
          inputName={`upcoming--retreatee--first-name--${retreateeIdx}`}
          inputPlaceholder="First Name"
          value={fields.firstName}
          onChange={changeHandlers["firstName"]}
          inputGroupClass={classes[`${baseClass}--retreatee--first-name`]}
          inputClass={classes[`${baseClass}--retreatee--first-name--input`]}
          labelClass={classes[`${baseClass}--retreatee--first-name--label`]}
          valid={firstNameValid}
          invalidText="Your first name is required."
        />
        <InputBar
          label="Last Name"
          type="text"
          inputName={`upcoming--retreatee--last-name----${retreateeIdx}`}
          inputPlaceholder="Last Name"
          value={fields.lastName}
          onChange={changeHandlers["lastName"]}
          inputGroupClass={classes[`${baseClass}--retreatee--last-name`]}
          inputClass={classes[`${baseClass}--retreatee--last-name--input`]}
          labelClass={classes[`${baseClass}--retreatee--last-name--label`]}
          valid={lastNameValid}
          invalidText="Your last name is required."
        />
        <InputBar
          label="Email"
          type="email"
          inputName={`upcoming--retreatee--email--${retreateeIdx}`}
          inputPlaceholder="Email"
          value={fields.email}
          onChange={changeHandlers["email"]}
          inputGroupClass={classes[`${baseClass}--retreatee--email`]}
          inputClass={classes[`${baseClass}--retreatee--email--input`]}
          labelClass={classes[`${baseClass}--retreatee--email--label`]}
          valid={emailValid}
          invalidText="A valid email is required."
        />
        <InputBar
          label="Contact No."
          type="text"
          inputName={`upcoming--retreatee--contact--${retreateeIdx}`}
          inputPlaceholder="Contact No."
          value={fields.phone}
          onChange={changeHandlers["phone"]}
          valid={phoneValid}
          invalidText="A valid mobile number is required."
          inputGroupClass={classes[`${baseClass}--retreatee--contact`]}
          inputClass={classes[`${baseClass}--retreatee--contact--input`]}
          labelClass={classes[`${baseClass}--retreatee--contact--label`]}
        />
        <InputOptions
          inputOptions={radioOptions}
          type="checkbox"
          overallGroupClass={classes[`${baseClass}--retreatee--vaccinate`]}
          legendClass={classes[`${baseClass}--retreatee--vaccinate--legend`]}
          optionGroupClass={
            classes[`${baseClass}--retreatee--vaccinate--group`]
          }
          labelClass={classes[`${baseClass}--retreatee--vaccinate--label`]}
          btnClass={classes[`${baseClass}--retreatee--vaccinate--btn`]}
        />
      </div>
    </div>
  );
}
