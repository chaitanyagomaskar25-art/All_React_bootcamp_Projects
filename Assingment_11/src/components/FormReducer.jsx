import React from "react";

const intialState = {
  step: 1,
  formData: {
    username: "",
    city: "",
  },
};



const FormReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.payload },
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: Math.min(state.step + 1, 3),
      };
    case "PREV_STEP":
      return { ...state, step: Math.max(state.step - 1, 1) };
    default:
      throw new Error("Invalid Action Type");
  }
};

export { intialState, FormReducer };
