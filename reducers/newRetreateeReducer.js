export const newRetreateeInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  vaccinated: "",
  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  vaccinatedValid: false,
  retreateeValid: false,
};

export function validateField(input, field) {
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
}

function validateRetreatee(state) {
  return (
    state.firstNameValid &&
    state.lastNameValid &&
    state.emailValid &&
    state.phoneValid &&
    state.vaccinatedValid
  );
}

export function newRetreateeReducer(state, action) {
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
    newState.retreateeValid =
      validateRetreatee(newState) &&
      newState.firstName !== "" &&
      newState.lastName !== "" &&
      newState.email !== "" &&
      newState.phone !== "" &&
      newState.vaccinated !== "";

    return newState;
  }
  return newRetreateeInitialState;
}
