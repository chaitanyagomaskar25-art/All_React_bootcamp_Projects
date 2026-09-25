import { produce } from "immer";

const intialState = [
  
];

const CounteReducer = produce((state, action) => {
  switch (action.type) {
    case "ADD":
      state.push({
        id: Date.now(),
        title: action.payload,
        status: false,
      });
      break;
    case "DELETE":
      const index = state.findIndex((todo) => todo.id === action.payload);

      state.splice(index, 1);
      break;
    case "isChecked":
        const isClicked = state.find(li => li.id === action.payload);
        if(isClicked){isClicked.status = !isClicked.status } 
        break
    default:
      throw new Error("Invalid type");
      
  }
});

export { intialState, CounteReducer };
