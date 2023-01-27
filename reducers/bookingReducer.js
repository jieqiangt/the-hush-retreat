export const bookingInitialState = {
  retreat: JSON.stringify({
    id: "0",
    name: "Release & Renew",
    date: "7th January 2023, Saturday",
    location: "Villa Samadhi Singapore",
  }),
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  numRetreatees: 1,
  vaccinated: "",
  message: "",
  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  vaccinatedValid: false,
  numRetreateesValid: true,
  retreatNameValid: true,
  formValid: false,
};

export function validateField(input, field) {
  if (field === "retreat") {
    return ["Release & Renew", "test"].includes(input.name);
  }

  if (field === "firstName") {
    return input.length > 0 && !/[^a-zA-Z\s]+/.test(input);
  }

  if (field === "lastName") {
    return input.length > 0 && !/[^a-zA-Z\s]+/.test(input);
  }

  if (field === "email") {
    return (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input
      ) && !/[\s\t\0\n\v\r]+/.test(input)
    );
  }

  if (field === "phone") {
    return input.length >= 8 && !/[^a-zA-Z0-9+]+/.test(input);
  }

  if (field === "vaccinated") {
    return input ? input : false;
  }

  if (field === "numRetreatees") {
    return input > 0 && input <= 8;
  }
}

function validateForm(state) {
  return (
    state.firstNameValid &&
    state.lastNameValid &&
    state.emailValid &&
    state.phoneValid &&
    state.vaccinatedValid &&
    state.numRetreateesValid &&
    state.retreatNameValid
  );
}

export function bookingReducer(state, action) {
  if (action.type === "INPUT") {
    const newState = { ...state };
    newState[action.field] = action[action.field];

    return newState;
  }

  if (action.type === "FIELD_VAL") {
    const newState = { ...state };
    newState[action.field + "Valid"] =
      validateField(action[action.field], action.field) ||
      (action[action.field] === "" && !newState[action.field + "Valid"]);

    newState.formValid =
      validateForm(newState) &&
      newState.retreat.name !== "" &&
      newState.firstName !== "" &&
      newState.lastName !== "" &&
      newState.email !== "" &&
      newState.phone !== "" &&
      newState.numRetreatees !== "" &&
      newState.vaccinated !== "";

    return newState;
  }
  return bookingInitialState;
}
