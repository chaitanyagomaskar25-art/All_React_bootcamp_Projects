import { createContext, useReducer, useContext } from "react";
import { initialState, CartReducer } from "../reducer/CartReducer";

const CartContext = createContext();
const DispatchContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);

  return (
    
    <CartContext value={cart}>
      <DispatchContext value={dispatch}>
        {children}
      </DispatchContext>
    </CartContext>
  );
};

const useCartState = () => {
  const result = useContext(CartContext);
  if (result === undefined) {
    throw new Error("CartContext error");
  }
  return result;
};

const useDispatchState = () => {
  const result = useContext(DispatchContext);
  if (result === undefined) {
    throw new Error("Dispatch erro");
  }
  return result;
};

export { ContextProvider, useCartState, useDispatchState };
