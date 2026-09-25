import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const SetAuthContext = createContext();

const ContextProvider = ({children})=>{
    const [isAuth, setisAuth] = useState(false);
    return(
        <AuthContext value={isAuth}>
        <SetAuthContext value={setisAuth}>
            {children}
        </SetAuthContext>
    </AuthContext>

    )
}

const useAuth = ()=>{
    const result = useContext(AuthContext);
    if( result === undefined){
        throw new Error("Error");
    }
    return result
}
const useSetAuth = ()=>{
    const result = useContext(SetAuthContext);
    if( result === undefined){
        throw new Error("Error");
    }
    return result
}

export {ContextProvider, useAuth, useSetAuth}