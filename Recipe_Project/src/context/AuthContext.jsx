import { createContext, useContext, useState } from "react";

const IsAuth = createContext();
const SetIsAuth = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <IsAuth value={isAuth}>
      <SetIsAuth value={setIsAuth}>{children}</SetIsAuth>
    </IsAuth>
  );
};

const useIsAuth = () => {
  const result = useContext(IsAuth);
  if (result === undefined) {
    throw new Error("Erro");
  }
  return result;
};
const useSetIsAuth = () => {
  const result = useContext(SetIsAuth);
  if (result === undefined) {
    throw new Error("Erro");
  }
  return result;
};

export { AuthProvider, useIsAuth, useSetIsAuth };
