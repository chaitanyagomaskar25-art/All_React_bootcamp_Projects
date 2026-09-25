import React from 'react'
import { data } from './data'
import { useCartState, useDispatchState } from '../context/CartContext'

const Product = () => {
    const cart = useCartState();
    const dispatch = useDispatchState();

  return (
    <div>
        <h1>Products</h1>
      {data.map(item=>(
        <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button onClick={()=> dispatch({type: "ADD", payload: item})}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Product; 
