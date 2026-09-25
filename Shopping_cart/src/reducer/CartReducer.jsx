const intialState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action)=>{
    switch (action.type) {
        case "ADD":
            return {...state, items: [...state.items, action.payload]}
        default:
            throw new Error("Invalid Type");     
    }
}

export {intialState, CartReducer}