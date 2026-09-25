import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    customRecipes: [],
    totalCartProducts : 0,

}

const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        addCustomRecipe: (state, action) => {
            state.customRecipes.unshift(action.payload);
        },
        liked: (state, action)=>{
             if (action.payload && action.payload.id) {
                const exists = state.products.some(p => p.id === action.payload.id);
                
                if (!exists) {
                    state.products.push(action.payload);
                    state.totalCartProducts = state.products.length;
                }
            }
        },
        disliked: (state, action)=>{
            state.products = state.products.filter(p => p.id !== action.payload);
            state.totalCartProducts = state.products.length;
        },


    }
})

export const {liked, disliked, addCustomRecipe} = ProductSlice.actions
export default ProductSlice.reducer;
