import React, { useReducer, useState } from "react";
import { initialState, Expense } from "../reducer/ExpenseReducer";
import { useSetAuth } from "../context/AuthContext";

const Dashboard = (props) => {
  const [state, dispath] = useReducer(Expense, initialState);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const [amount, setAmount] = useState("");
  const setIsAuth = useSetAuth();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ margin: "10px" }}>Hello {props.input} </h1>
        <button
          style={{
            margin: "10px",
            padding: "5px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={() => setIsAuth(false)}
        >
          Logout
        </button>
      </div>

      <div>
        <h1 style={{ margin: "20px" }}>Total Amount Rs. {state.totalAmount}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ margin: "10px auto" }}>Add new Expense</h2>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <input
              vastyle={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              lue={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add expense"
              style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}
            />
            <input
              style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="Enter Amount"
            />
            <input
              style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Enter Category"
            />
            <button
              style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}
              onClick={() => {
                dispath({
                  type: "ADD",
                  payload: {
                    id: Date.now(),
                    title: title,
                    category: category,
                    amount: Number(amount),
                  },
                });
                setAmount("");
                setTitle("");
                setCategory("");
              }}
            >
              Add expense
            </button>
          </div>
        </div>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {state.items.length > 0 ? (
            state.items.map((item, idx) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  height: "100px",
                  border: "1px solid black",
                }}
                key={idx}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>{" "}
                <p>{item.amount}</p>
                <button
                  onClick={() =>
                    dispath({
                      type: "DELETE",
                      payload: { id: item.id, amount: item.amount },
                    })
                  }
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No expense found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
