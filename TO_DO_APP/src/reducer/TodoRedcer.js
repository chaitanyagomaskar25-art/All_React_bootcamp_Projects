const initialState = [{ id: 1, title: "", status: false }];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: action.payload.id, title: action.payload.title, status: false },
      ];
    case "STATUS":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: !todo.status }
          : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error("Invalid Action type");
  }
};

export { initialState, todoReducer };
