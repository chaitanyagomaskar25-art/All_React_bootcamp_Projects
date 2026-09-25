import { createContext, useContext, useReducer } from "react";
import { intialState, CartReducer } from "../reducer/CartReducer";

const CartContext = createContext();
const DispatchContext = createContext();

const ContextProvider = ({children})=>{
    const [cart, dispatch] = useReducer(CartReducer, intialState)
    return(
        <CartContext value={cart}>
            <DispatchContext value={dispatch}>
                {children}
            </DispatchContext>
        </CartContext>
    )
}

const useCartState = ()=>{
    const cartStateContext = useContext(CartContext);
    if(cartStateContext === undefined){
        throw new Error("Cart Error");
    }
    return cartStateContext;
}

const useDispatchState = ()=>{
    const dispatchContext = useContext(DispatchContext);
    if(dispatchContext === undefined){
        throw new Error("Dispatch Error");
    }
    return dispatchContext;
}

export {ContextProvider, useCartState, useDispatchState}