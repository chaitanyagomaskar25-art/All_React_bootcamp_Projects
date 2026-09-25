import React from "react";
import { useNavigate } from "react-router";
import { useSetIsAuth } from "../context/AuthContext";

const Login = () => {
  const setIsAuth = useSetIsAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/fav");
  };

  return (
    <div>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;