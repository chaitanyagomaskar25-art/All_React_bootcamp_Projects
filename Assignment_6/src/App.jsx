import React, { use, useState } from "react";
import "./App.css";
const App = () => {
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleErrors = (e) => {
    const { name, value } = e.target;
    setError((prev) => {
      let msg = "";
      if (name === "username") {
        msg =
          value.length <= 2 ? "Username must be at least 3 characters." : "";
      }
      if (name === "email") {
        msg = !value.includes("@")
          ? 'Please enter a valid email containing "@"'
          : "";
      }
      if (name === "password") {
        msg =
          value.length <= 8
            ? `Password is too short(${value.length}/8 characters)`
            : "";
      
      }
      return { ...prev, [name]: msg };
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create an Account</h1>
        <p className="subtitle">Join our community today</p>

        <div className="input-group">
          <label>Username</label>
          <input
            className={error.username ? "input-error" : ""}
            onChange={handleErrors}
            name="username"
            type="text"
            placeholder="Chaitanya123"
          />
          {error.username && (
            <span className="error-text">{error.username}</span>
          )}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            className={error.email ? "input-error" : ""}
            onChange={handleErrors}
            name="email"
            type="email"
            placeholder="you@example.com"
          />
          {error.email && <span className="error-text">{error.email}</span>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            className={error.password ? "input-error" : ""}
            onChange={handleErrors}
            name="password"
            type="password"
            placeholder="••••••••"
          />
          {error.password && (
            <span className="error-text">{error.password}</span>
          )}
        </div>

        <button className="submit-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default App;
