// import CounterSlice from "./features/CounterSlice";
// import { configureStore } from "@reduxjs/toolkit";


// const store = configureStore({
//     reducer: {
//         counter : CounterSlice,
//     }
// })

// export default store;

import ProductSlice from "./features/ProductSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        cart: ProductSlice
    }
})

export default store