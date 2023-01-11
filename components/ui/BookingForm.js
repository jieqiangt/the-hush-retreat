import { useRouter } from "next/router";
import { useContext, useEffect, useReducer } from "react";
import {
  bookingInitialState,
  bookingReducer,
} from "../../reducers/bookingReducer";
import InputBar from "../ui/InputBar";
import InputSelect from "../ui/InputSelect";
import InputOptions from "./InputOptions";
import NotificationContext from "../../store/notificationContext";
import { callApi } from "../../utils/apiUtils";

export default function BookingForm(props) {
  const [bookingState, dispatchBooking] = useReducer(
    bookingReducer,
    bookingInitialState
  );
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  const { firstNameValid, lastNameValid, emailValid, phoneValid, formValid } =
    bookingState;

  const fields = {
    retreatName: bookingState.retreatName,
    firstName: bookingState.firstName,
    lastName: bookingState.lastName,
    email: bookingState.email,
    phone: bookingState.phone,
    numRetreatees: bookingState.numRetreatees,
    vaccinated: bookingState.vaccinated,
    message: bookingState.message,
  };

  const changeHandlers = {};

  for (let field in fields) {
    changeHandlers[field] = function (event) {
      let inputParams = { type: "INPUT", field: field };
      inputParams[field] = event.target.checked
        ? event.target.checked
        : event.target.value;

      dispatchBooking(inputParams);
    };
  }
  const valFieldHandlers = {};

  for (let field in fields) {
    valFieldHandlers[field] = function () {
      const timerId = setTimeout(() => {
        let inputParams = { type: "FIELD_VAL", field: field };
        inputParams[field] = fields[field];
        dispatchBooking(inputParams);
      }, 500);

      return () => {
        clearTimeout(timerId);
      };
    };
  }

  useEffect(valFieldHandlers["firstName"], [dispatchBooking, fields.firstName]);
  useEffect(valFieldHandlers["lastName"], [dispatchBooking, fields.lastName]);
  useEffect(valFieldHandlers["email"], [dispatchBooking, fields.email]);
  useEffect(valFieldHandlers["phone"], [dispatchBooking, fields.phone]);
  useEffect(valFieldHandlers["numRetreatees"], [dispatchBooking, fields.numRetreatees]);
  useEffect(valFieldHandlers["retreatName"], [dispatchBooking, fields.retreatName]);
  useEffect(valFieldHandlers["vaccinated"], [dispatchBooking, fields.vaccinated]);

  async function bookingHandler(event) {
    event.preventDefault();

    const result = await callApi({
      url: "/api/booking",
      method: "POST",
      body: {
        retreatName: bookingState.retreatName,
        firstName: bookingState.firstName,
        lastName: bookingState.lastName,
        email: bookingState.email,
        phone: bookingState.phone,
        numRetreatees: bookingState.numRetreatees,
        vaccinated: bookingState.vaccinated,
        message: bookingState.message,
      },
    });

    if (!result.ok) {
      const errorNotification = await result.json();
      notificationCtx.showNotification(errorNotification);
    }

    if (result.ok) {
      const successNotification = await result.json();
      notificationCtx.showNotification(successNotification);
      router.replace("/");
    }
  }

  const radioOptions = [
    {
      name: "vaccinated",
      value: null,
      label: "I certify that I am fully vaccincated.",
      onChange: changeHandlers["vaccinated"],
    },
  ];

  console.log(`vaccinated: ${bookingState.vaccinated}`);
  console.log(`formValid: ${bookingState.formValid}`);

  return (
    <form action="#" className={props.classes[`${props.baseClass}--form`]}>
      <InputBar
        label="First Name"
        type="text"
        inputName="upcoming--form--first-name"
        inputPlaceholder="First Name"
        value={fields.firstName}
        onChange={changeHandlers["firstName"]}
        inputGroupClass={props.classes[`${props.baseClass}--form--first-name`]}
        inputClass={
          props.classes[`${props.baseClass}--form--first-name--input`]
        }
        labelClass={
          props.classes[`${props.baseClass}--form--first-name--label`]
        }
      />
      <InputBar
        label="Last Name"
        type="text"
        inputName="upcoming--form--last-name"
        inputPlaceholder="Last Name"
        value={fields.lastName}
        onChange={changeHandlers["lastName"]}
        inputGroupClass={props.classes[`${props.baseClass}--form--last-name`]}
        inputClass={props.classes[`${props.baseClass}--form--last-name--input`]}
        labelClass={props.classes[`${props.baseClass}--form--last-name--label`]}
      />
      <InputBar
        label="Email"
        type="email"
        inputName="upcoming--form--email"
        inputPlaceholder="Email"
        value={fields.email}
        onChange={changeHandlers["email"]}
        inputGroupClass={props.classes[`${props.baseClass}--form--email`]}
        inputClass={props.classes[`${props.baseClass}--form--email--input`]}
        labelClass={props.classes[`${props.baseClass}--form--email--label`]}
      />
      <InputBar
        label="Contact No."
        type="text"
        inputName="upcoming--form--contact"
        inputPlaceholder="Contact No."
        value={fields.phone}
        onChange={changeHandlers["phone"]}
        inputGroupClass={props.classes[`${props.baseClass}--form--contact`]}
        inputClass={props.classes[`${props.baseClass}--form--contact--input`]}
        labelClass={props.classes[`${props.baseClass}--form--contact--label`]}
      />
      <InputSelect
        label="No. of Retreatees"
        inputName="upcoming--form--num"
        value={fields.numRetreatees}
        onChange={changeHandlers["numRetreatees"]}
        inputGroupClass={props.classes[`${props.baseClass}--form--num`]}
        inputClass={props.classes[`${props.baseClass}--form--num--input`]}
        labelClass={props.classes[`${props.baseClass}--form--num--label`]}
        inputOptions={[1,2,3,4,5,6,7,8].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      />
      <InputSelect
        label="Retreat Name"
        inputName="upcoming--form--retreat-name"
        value={fields.retreatName}
        onChange={changeHandlers["retreatName"]}
        inputGroupClass={
          props.classes[`${props.baseClass}--form--retreat-name`]
        }
        inputClass={
          props.classes[`${props.baseClass}--form--retreat-name--input`]
        }
        labelClass={
          props.classes[`${props.baseClass}--form--retreat-name--label`]
        }
        inputOptions={props.retreatList.map((item) => (
          <option key={item.retreatId} value={item.retreatId}>
            {item.retreatName}
          </option>
        ))}
      />
      <InputBar
        label="Message"
        type="textarea"
        inputName="upcoming--form--message"
        inputPlaceholder="Message"
        value={fields.message}
        onChange={changeHandlers["message"]}
        inputGroupClass={props.classes[`${props.baseClass}--form--message`]}
        inputClass={props.classes[`${props.baseClass}--form--message--input`]}
        labelClass={props.classes[`${props.baseClass}--form--message--label`]}
        rows="3"
      />
      <InputOptions
        options={radioOptions}
        type="checkbox"
        optionsGroupClass={props.classes[`${props.baseClass}--form--vaccinate`]}
        legendClass={
          props.classes[`${props.baseClass}--form--vaccinate--legend`]
        }
        optionGroupClass={
          props.classes[`${props.baseClass}--form--vaccinate--group`]
        }
        labelClass={props.classes[`${props.baseClass}--form--vaccinate--label`]}
        btnClass={props.classes[`${props.baseClass}--form--vaccinate--btn`]}
      />
      <button
        className={props.classes[`${props.baseClass}--form--btn`]}
        onClick={bookingHandler}
        disabled={!formValid}
      >
        Register
      </button>
    </form>
  );
}
