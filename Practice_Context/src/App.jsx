import React from "react";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>   
  );
};

export default App;
