import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthSetterContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
 return(
     <AuthContext value={isAuth}>
    <AuthSetterContext value={setIsAuth}>
        {children}
    </AuthSetterContext>
  </AuthContext>
 )
};


const useStateAuth = ()=>{
    const result = useContext(AuthContext);
    if(result === undefined){
        throw new Error("Auth Context is undefined");
    }
    return result;
}

const useSetterAuth = ()=>{
    const result = useContext(AuthSetterContext);
    if(result === undefined){
        throw new Error("Auth setter is undefined");      
    }
    return result;
}

export {AuthProvider, useStateAuth, useSetterAuth}