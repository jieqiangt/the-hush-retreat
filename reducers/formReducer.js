export const formInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  vaccinated: "",
  size: "xs",
  bikiniStyle: "a",
  dietary: "none",
  accomodation: "a",
  firstNameValid: true,
  lastNameValid: true,
  emailValid: true,
  phoneValid: true,
  vaccinatedValid: false,
  sizeValid: true,
  bikiniStyleValid: true,
  dietaryValid: true,
  accomodationValid: true,
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

  if (field === "accomodation") {
    return ["a", "b", "c", "d"].includes(input);
  }

  if (field === "dietary") {
    return [
      "none",
      "vegetarian",
      "vegan",
      "pescatarian",
      "noBeef",
      "noPork",
      "others",
    ].includes(input);
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
    (state.sizeValid ? state.sizeValid : true) &&
    (state.bikiniStyleValid ? state.bikiniStyleValid : true) &&
    (state.accomodationValid ? state.accomodationValid : true) &&
    (state.dietaryValid ? state.dietaryValid : true) &&
    state.vaccinatedValid
  );
}

export function formReducer(state, action) {
  const oldState = Object.fromEntries(
    action.fields.map((col) => [col, state[col]])
  );
  if (action.type === "INPUT") {
    if (action.fields.includes(action.field)) {
      const newState = { ...oldState };
      newState[action.field] = action[action.field];
      return newState;
    }
    return state;
  }

  if (action.type === "FIELD_VAL") {
    const oldState = Object.fromEntries(
      action.fields.map((col) => [col, state[col]])
    );
    if (action.fields.includes(action.field)) {
      const newState = { ...oldState };
      newState[action.field + "Valid"] =
        validateField(action[action.field], action.field) ||
        action[action.field] === "";
      newState.retreateeValid =
        validateForm(newState) &&
        newState.firstName !== "" &&
        newState.lastName !== "" &&
        newState.email !== "" &&
        newState.vaccinated !== "";

      return newState;
    }
    return state;
  }
  return newRetreateeInitialState;
}
