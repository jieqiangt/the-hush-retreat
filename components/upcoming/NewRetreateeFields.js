import { useEffect, useReducer } from "react";
import InputText from "../ui/InputText";
import InputCheckBox from "../ui/InputCheckBox";
import { formInitialState, formReducer } from "../../reducers/formReducer";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";
import InputSelect from "../ui/InputSelect";
import { formatFieldName } from "../../utils/dataUtils";

export default function NewRetreateeFields(props) {
  const [newRetreateeState, dispatchNewRetreatee] = useReducer(
    formReducer,
    formInitialState
  );

  const {
    classes,
    baseClass,
    onValidated,
    onDeleteRetreatee,
    retreateeIdx,
    retreateeCounter,
    selectOptions,
    hasNationality,
  } = props;

  const {
    firstNameValid,
    lastNameValid,
    emailValid,
    phoneValid,
    nationalityValid,
    retreateeValid,
  } = newRetreateeState;

  const fields = {
    firstName: newRetreateeState.firstName,
    lastName: newRetreateeState.lastName,
    email: newRetreateeState.email,
    phone: newRetreateeState.phone,
    vaccinated: newRetreateeState.vaccinated,
    nationality: newRetreateeState.nationality,
    size: newRetreateeState.size,
    bikiniStyle: newRetreateeState.bikiniStyle,
    accomodation: newRetreateeState.accomodation,
    dietary: newRetreateeState.dietary,
  };

  const allStateNames = Object.keys(fields);

  const allOptionalFields = ["size", "bikiniStyle", "accomodation", "dietary"];

  const fieldsToRetain = [...Object.keys(selectOptions)].map((fieldName) =>
    !fieldName.includes("-") ? fieldName : formatFieldName(fieldName)
  );

  const fieldsToRemove = allOptionalFields.filter(
    (value) => !fieldsToRetain.includes(value)
  );

  for (const fieldName of fieldsToRemove) {
    const idx = allStateNames.indexOf(fieldName);
    allStateNames.splice(idx, 1);
  }

  if (!hasNationality) {
    const idx = allStateNames.indexOf("nationality");
    allStateNames.splice(idx, 1);
  }

  const stateNames = [
    ...Object.keys(fields),
    ...Object.keys(fields).map((name) => `${name}Valid`),
    "retreateeValid",
  ];

  const changeHandlers = {};

  for (let field in fields) {
    changeHandlers[field] = function (event) {
      let inputParams = {
        type: "INPUT",
        field: field,
        fields: stateNames,
      };
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
        let inputParams = {
          type: "FIELD_VAL",
          field: field,
          fields: stateNames,
        };
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
  useEffect(valFieldHandlers["nationality"], [
    dispatchNewRetreatee,
    fields.nationality,
  ]);
  useEffect(valFieldHandlers["vaccinated"], [
    dispatchNewRetreatee,
    fields.vaccinated,
  ]);
  useEffect(valFieldHandlers["size"], [dispatchNewRetreatee, fields.size]);
  useEffect(valFieldHandlers["bikiniStyle"], [
    dispatchNewRetreatee,
    fields.bikiniStyle,
  ]);
  useEffect(valFieldHandlers["accomodation"], [
    dispatchNewRetreatee,
    fields.accomodation,
  ]);
  useEffect(valFieldHandlers["dietary"], [
    dispatchNewRetreatee,
    fields.dietary,
  ]);

  useEffect(() => {
    const newRetreateeOutput = {};
    const updatedRetreateeState = { ...newRetreateeState };

    for (const key of fieldsToRemove) {
      delete updatedRetreateeState[key];
      delete updatedRetreateeState[`${key}Valid`];
    }
    newRetreateeOutput[retreateeIdx] = updatedRetreateeState;
    onValidated(newRetreateeOutput);
  }, [retreateeValid, newRetreateeState]);

  const radioOptions = [
    {
      name: `vaccinated--${retreateeIdx}`,
      value: "",
      label: "I acknowledge that I am fully vaccinated from Covid-19.",
      onChange: changeHandlers["vaccinated"],
    },
  ];

  let inputSelects = [];

  for (let key in selectOptions) {
    let options = selectOptions[key];
    const className = !key.includes("-") ? key : key;
    const labelName = !key.includes("-") ? key : key.replace("-", " ");
    const fieldName = !key.includes("-") ? key : formatFieldName(key);

    inputSelects.push(
      <InputSelect
        key={key}
        inputGroupClass={
          classes[`${baseClass}--retreatee--${className}--group`]
        }
        inputClass={classes[`${baseClass}--retreatee--${className}`]}
        inputName={key}
        onChange={changeHandlers[fieldName]}
        inputOptions={options}
        labelClass={classes[`${baseClass}--retreatee--${className}--label`]}
        label={labelName}
        optionClass={classes[`${baseClass}--retreatee--${className}--option`]}
      />
    );
  }

  return (
    <div className={classes[`${baseClass}--retreatee`]}>
      {retreateeIdx !== "main" ? (
        <div className={classes[`${baseClass}--retreatee--header`]}>
          <span className={classes[`${baseClass}--retreatee--title`]}>
            {"Retreatee"} &#8212; {`${retreateeCounter}`}
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
      <fieldset className={classes[`${baseClass}--retreatee--fields`]}>
        <InputText
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
        <InputText
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
        <InputText
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
        <InputText
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
        {hasNationality ? (
          <InputText
            label="Nationality"
            type="text"
            inputName={`upcoming--retreatee--nationality--${retreateeIdx}`}
            inputPlaceholder="Nationality"
            value={fields.nationality}
            onChange={changeHandlers["nationality"]}
            valid={nationalityValid}
            invalidText="A valid nationality is required."
            inputGroupClass={classes[`${baseClass}--retreatee--nationality`]}
            inputClass={classes[`${baseClass}--retreatee--nationality--input`]}
            labelClass={classes[`${baseClass}--retreatee--nationality--label`]}
          />
        ) : (
          ""
        )}
        {inputSelects}
        <InputCheckBox
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
      </fieldset>
    </div>
  );
}
