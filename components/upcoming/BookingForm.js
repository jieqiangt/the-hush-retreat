import { useRouter } from "next/router";
import { useContext, useEffect, useReducer } from "react";
import {
  bookingInitialState,
  bookingReducer,
} from "../../reducers/bookingReducer";
import InputBar from "../ui/InputBar";
import InputSelect from "../ui/InputSelect";
import InputOptions from "../ui/InputOptions";
import NotificationContext from "../../store/notificationContext";
import ModalContext from "../../store/modalContext";
import { callApi } from "../../utils/apiUtils";

export default function BookingForm(props) {
  const [bookingState, dispatchBooking] = useReducer(
    bookingReducer,
    bookingInitialState
  );
  const { closeModal } = useContext(ModalContext);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const { baseClass, classes, retreatDetails } = props;

  const { firstNameValid, lastNameValid, emailValid, phoneValid, formValid } =
    bookingState;

  const fields = {
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
  useEffect(valFieldHandlers["numRetreatees"], [
    dispatchBooking,
    fields.numRetreatees,
  ]);
  useEffect(valFieldHandlers["vaccinated"], [
    dispatchBooking,
    fields.vaccinated,
  ]);

  async function bookingHandler(event) {
    event.preventDefault();

    const result = await callApi({
      url: "/api/booking",
      method: "POST",
      body: {
        retreat: retreatDetails,
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

      await callApi({
        url: "/api/bookingEmails",
        method: "POST",
        body: {
          retreatName: retreatDetails.name,
          date: retreatDetails.date,
          location: retreatDetails.location,
          firstName: bookingState.firstName,
          lastName: bookingState.lastName,
          email: bookingState.email,
          phone: bookingState.phone,
          numRetreatees: bookingState.numRetreatees,
          vaccinated: bookingState.vaccinated,
          message: bookingState.message,
          insertedId: successNotification.insertedId,
        },
      });

      closeModal();
      router.replace("/");
      notificationCtx.showNotification(successNotification);
    }
  }

  const radioOptions = [
    {
      name: "vaccinated",
      value: "",
      label: "I certify that I am fully vaccincated.",
      onChange: changeHandlers["vaccinated"],
    },
  ];

  return (
    <form action="#" className={classes[`${baseClass}--form`]}>
      <InputBar
        label="First Name"
        type="text"
        inputName="upcoming--form--first-name"
        inputPlaceholder="First Name"
        value={fields.firstName}
        onChange={changeHandlers["firstName"]}
        inputGroupClass={classes[`${baseClass}--form--first-name`]}
        inputClass={classes[`${baseClass}--form--first-name--input`]}
        labelClass={classes[`${baseClass}--form--first-name--label`]}
        valid={firstNameValid}
        invalidText="Your first name is required."
      />
      <InputBar
        label="Last Name"
        type="text"
        inputName="upcoming--form--last-name"
        inputPlaceholder="Last Name"
        value={fields.lastName}
        onChange={changeHandlers["lastName"]}
        inputGroupClass={classes[`${baseClass}--form--last-name`]}
        inputClass={classes[`${baseClass}--form--last-name--input`]}
        labelClass={classes[`${baseClass}--form--last-name--label`]}
        valid={lastNameValid}
        invalidText="Your last name is required."
      />
      <InputBar
        label="Email"
        type="email"
        inputName="upcoming--form--email"
        inputPlaceholder="Email"
        value={fields.email}
        onChange={changeHandlers["email"]}
        inputGroupClass={classes[`${baseClass}--form--email`]}
        inputClass={classes[`${baseClass}--form--email--input`]}
        labelClass={classes[`${baseClass}--form--email--label`]}
        valid={emailValid}
        invalidText="A valid email is required."
      />
      <InputBar
        label="Contact No."
        type="text"
        inputName="upcoming--form--contact"
        inputPlaceholder="Contact No."
        value={fields.phone}
        onChange={changeHandlers["phone"]}
        valid={phoneValid}
        invalidText="A valid mobile number is required."
        inputGroupClass={classes[`${baseClass}--form--contact`]}
        inputClass={classes[`${baseClass}--form--contact--input`]}
        labelClass={classes[`${baseClass}--form--contact--label`]}
      />
      <InputSelect
        label="No. of Retreatees"
        inputName="upcoming--form--num"
        value={fields.numRetreatees}
        onChange={changeHandlers["numRetreatees"]}
        inputGroupClass={classes[`${baseClass}--form--num`]}
        inputClass={classes[`${baseClass}--form--num--input`]}
        labelClass={classes[`${baseClass}--form--num--label`]}
        inputOptions={[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <option key={item} value={item}>
            {item}
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
        inputGroupClass={classes[`${baseClass}--form--message`]}
        inputClass={classes[`${baseClass}--form--message--input`]}
        labelClass={classes[`${baseClass}--form--message--label`]}
        rows="3"
      />
      <InputOptions
        inputOptions={radioOptions}
        type="checkbox"
        overallGroupClass={classes[`${baseClass}--form--vaccinate`]}
        legendClass={classes[`${baseClass}--form--vaccinate--legend`]}
        optionGroupClass={classes[`${baseClass}--form--vaccinate--group`]}
        labelClass={classes[`${baseClass}--form--vaccinate--label`]}
        btnClass={classes[`${baseClass}--form--vaccinate--btn`]}
      />
      <button
        className={classes[`${baseClass}--form--btn`]}
        onClick={bookingHandler}
        disabled={!formValid}
      >
        Register
      </button>
    </form>
  );
}
