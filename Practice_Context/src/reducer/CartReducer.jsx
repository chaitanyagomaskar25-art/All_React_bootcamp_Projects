const initialState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return {
          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount + action.payload.price,
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        totalAmount: state.totalAmount + action.payload.price,
      };
    case "DELETE":
      const totalCart = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalAmount: state.totalAmount - totalCart.price * totalCart.quantity,
      }; 
    case "DECREASE":
      const existingProduct = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingProduct.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
          totalAmount: state.totalAmount - existingProduct.price,
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
        totalAmount: state.totalAmount - existingProduct.price,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export { initialState, CartReducer };
