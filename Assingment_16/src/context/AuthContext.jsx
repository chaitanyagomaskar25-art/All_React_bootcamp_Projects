import { Children, createContext, useContext, useState } from "react";

const IsAuth = createContext();
const SetIsAuth = createContext();

const AuthContext = ({ children }) => {
const loginStatus = localStorage.getItem("isAuth") === "true";
  const [isAuth, setIsAuth] = useState(loginStatus);

  return (
    <IsAuth value={isAuth}>
      <SetIsAuth value={setIsAuth}>{children}</SetIsAuth>
    </IsAuth>
  );
};

const useIsAuth = () => {
  const result = useContext(IsAuth);
  if (result === undefined) {
    throw new Error("IsAuth is undefined");
  }
  return result;
};

const useSetIsAuth = () => {
  const result = useContext(SetIsAuth);
  if (result === undefined) {
    throw new Error("IsAuth is undefined");
  }
  return result;
};


export {useIsAuth, useSetIsAuth, AuthContext}