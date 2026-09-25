import { createSlice } from "@reduxjs/toolkit"

const initialState = 0

const CounterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increase:(state, action)=>{
            return  state+1
        },
        decrease:(state, action)=>{
            return state-1
        }
    }
})

export const {increase, decrease} = CounterSlice.actions 
export default CounterSlice.reducer
