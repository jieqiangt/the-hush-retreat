export const formInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  vaccinated: "",
  size: "",
  bikiniStyle: "",
  firstNameValid: true,
  lastNameValid: true,
  emailValid: true,
  phoneValid: true,
  vaccinatedValid: false,
  sizeValid: true,
  bikiniStyle: true,
  retreateeValid: false,
};

export function validateField(input, field) {
  if (field === "retreatId") {
    return input.length > 0;
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
    return input.length >= 8 && !/[^0-9+]+/.test(input);
  }

  if (field === "vaccinated") {
    return input ? input : false;
  }

  if (field === "size") {
    return ["xs", "s", "m", "l", "xl"].includes(input);
  }

  if (field === "bikiniStyle") {
    return ["a", "b", "c", "d"].includes(input);
  }

  if (field === "standardString") {
    return input.length > 0;
  }
}

function validateForm(state) {
  return (
    state.firstNameValid &&
    state.lastNameValid &&
    state.emailValid &&
    state.phoneValid &&
    state.vaccinatedValid
  );
}

export function formReducer(state, action) {
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
    newState.retreateeValid =
      validateForm(newState) &&
      newState.firstName !== "" &&
      newState.lastName !== "" &&
      newState.email !== "" &&
      newState.phone !== "" &&
      newState.vaccinated !== "";

    return newState;
  }
  return newRetreateeInitialState;
}
