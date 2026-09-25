import React, { useReducer, useState } from "react";
import { intialState, CounteReducer } from "./reducer/CountReducer";
import "./App.css";
const App = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(CounteReducer, intialState);
  const [isClicked, setIsClicked] = useState(false);

  return (
 <div className="todo-container">
  <div className="todo-card">
    <h1>ToDo Application</h1>
    
    <div className="input-group">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="What needs to be done?"
      />
      <button
        className="add-btn"
        onClick={() => {
          input.trim() !== "" ? dispatch({ type: "ADD", payload: input }) : alert("Please add title");
          setInput("");
        }}
      >
        Add Task
      </button>
    </div>

    <div className="list-section">
      <h2>Task List</h2>
      <ul>
        {state.map((list) => (
            <li key={list.id} className="todo-item">
              <span className={`task-text ${list.status ? "completed" : ""}`}>
                {list.title}
              </span>
              <div className="task-actions">
                <input
                  checked={list.status}
                  onChange={() => dispatch({ type: "isChecked", payload: list.id })}
                  type="checkbox"
                  className="status-checkbox"
                />
                <button
                  className="delete-btn"
                  onClick={() => dispatch({ type: "DELETE", payload: list.id })}
                  aria-label="Delete task"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  </div>
</div>
  );
};

export default App;
