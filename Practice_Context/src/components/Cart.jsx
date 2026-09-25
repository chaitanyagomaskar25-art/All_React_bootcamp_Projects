import React from "react";
import { useCartState, useDispatchState } from "../context/cartContext";

const Cart = () => {
  const state = useCartState();

  const dispatch = useDispatchState();

  return (
    <div>
      <div>This is cart Page</div>

      {state.items.length > 0 ? (
        <>
          {state.items.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.price}</p>
              <div>
                <button
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                  +
                </button>

                <p>{item.quantity}</p>

                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: item.id })
                  }
                >
                  -
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: item.id })}
                className="border p-1"
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total Amount: $ {state.totalAmount.toFixed(2)}</h2>
        </>
      ) : (
        "Cart is empty"
      )}
    </div>
  );
};

export default Cart;
