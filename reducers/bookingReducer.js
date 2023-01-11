export const bookingInitialState = {
  retreatName: "Release & Renew",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  numRetreatees: 1,
  vaccinated: "",
  message: "",
  firstNameValid: true,
  lastNameValid: true,
  emailValid: true,
  phoneValid: true,
  vaccinatedValid: true,
  numRetreateesValid: true,
  retreatNameValid: true,
  formValid: false,
};

export function validateField(input, field) {
  if (field === "retreatName") {
    return ['Release & Renew'].includes(input)
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
      action[action.field] === "";
    newState.formValid =
      validateForm(newState) &&
      newState.retreatName !== "" &&
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
