const initialState = {
  items: [],
  totalAmount: 0,
};

const Expense = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            title: action.payload.title,
            category: action.payload.category,
            amount: action.payload.amount,
          },
        ],
        totalAmount: state.totalAmount + action.payload.amount,
      };
    case "DELETE":
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
        totalAmount: state.totalAmount - action.payload.amount,
      };
    default:
      throw new Error("Invalid Action type");
  }
};

export { initialState, Expense };
