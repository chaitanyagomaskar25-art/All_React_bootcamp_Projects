import React, { useReducer, useState } from "react";
import "./App.css";
import { CountReducer, initialState } from "./Reducer/CountReducer";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(CountReducer, initialState);
  return (
  <div className="calculator-container">
  <h1>Count: {state.count}</h1>
  
  <input
    value={amount || ""}
    onChange={(e) => setAmount(Number(e.target.value))}
    type="number"
    placeholder="Type numbers...."
  />

  <div className="button-group">
    <button onClick={() => dispatch({ type: "add", amount: amount })}>
      ADD
    </button>
    <button onClick={() => dispatch({ type: "sub", amount: amount })}>
      SUB
    </button>
    {/* <button onClick={() => dispatch({ type: "multiply", amount: amount })}>
      MULTIPLY
    </button>
    <button onClick={() => dispatch({ type: "divide", amount: amount })}>
      DIVIDE
    </button> */}
    <button
      className="btn-reset"
      onClick={() => {
        setAmount("");
        dispatch({ type: "reset" });
      }}
    >
      RESET
    </button>
  </div>
</div>
  );
};

export default App;
