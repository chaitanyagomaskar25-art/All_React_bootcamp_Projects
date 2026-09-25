import React, { useState } from "react";
import { useSetterAuth, useStateAuth } from "../context/AuthContext";
import { ContextProvider } from "../context/cartContext";
import Main from "./Main";


const Login = () => {
  const isAuth = useStateAuth();
  const setIsAuth = useSetterAuth();
  if (isAuth) {
    return (
      <ContextProvider>
        <Main />
      </ContextProvider>
    );
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email.."
      />
      <button onClick={()=>setIsAuth(true)}>Log in</button>
    </div>
  );
};

export default Login;
