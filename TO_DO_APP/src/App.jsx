import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "./reducer/TodoRedcer";
import "./App.css"
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState(""); 

  const newID =
    state.length > 0 && state[state.length - 1].id
      ? state[state.length - 1].id + 1
      : 1;

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { id: newID, title: input } });
    setInput("");
  };
  
   const todolist = state.map((todo) =>
    todo.title !== "" ? (
      <li key={todo.id}>
        {todo.title}{" "}
        <span onClick={()=>    dispatch({ type: "STATUS", payload: { id: todo.id } })}>
          {todo.status ? "Done" : "Pending.."}
        </span>
        <button onClick={()=>dispatch({ type: "DELETE", payload: { id: todo.id } })}>DELETE</button>
      </li>
    ) : (
      ""
    ),
  );

  return (
    <div className="container">
      <h1>TO-DO APP</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Typing...."
      />
      <button onClick={handleAdd}>ADD</button>
      <ul>{todolist}</ul>
    </div>
  );
};

export default App;
