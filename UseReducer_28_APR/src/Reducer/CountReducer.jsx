import React from "react";
const initialState = {
  count: 0,
};
const CountReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + action.amount };
    case "sub":
      return { ...state, count: state.count - action.amount };
    case "multiply":
      return { ...state, count: state.count * action.amount };
    case "divide":
      return { ...state, count: (state.count / action.amount).toFixed(2) };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export { CountReducer, initialState };
