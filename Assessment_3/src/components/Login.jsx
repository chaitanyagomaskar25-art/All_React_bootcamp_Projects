import React, { useState } from "react";
import { useAuth, useSetAuth } from "../context/AuthContext";
import Dashboard from "./Dashboard";

const Login = () => {
  const [input, setInput] = useState("");
  const isAuth = useAuth();
  const setIsAuth = useSetAuth();
  if (isAuth) {
    return <Dashboard input={input} />;
  }
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          margin: "0 auto",
          boxShadow: "2px 2px 20px",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ margin: "20px" }}>Welcome Back</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your username"
          style={{ margin: "20px",padding:'20px', borderRadius: '10px' }}
        />
        <button
          style={{ margin: "20px",color:'white', fontWeight: '700', borderRadius: '10px', backgroundColor: 'blue', border: 'none', padding:'20px' }}
          onClick={() => {
            if (input !== "") {
              setIsAuth(true);
            } else {
              alert("Please enter username");
            }
          }}
        >
          Access dashboard
        </button>
      </div>
    </div>
  );
};

export default Login;
