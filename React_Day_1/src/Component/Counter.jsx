import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../store/features/CounterSlice';

const Counter = () => {
    const count = useSelector(state=> state.counter)
    console.log(count);
    const dispatch = useDispatch(state=> state.counter)
    // console.log(dispatch);
    
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={()=>dispatch(decrease())}>decrease</button>
    </div>
  )
}

export default Counter
