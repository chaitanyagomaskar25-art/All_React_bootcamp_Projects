import React from 'react'
import { useCartState } from '../context/CartContext'

const Cart = () => {
    const cartState = useCartState();

  return (
    <div>
      {cartState.items.map(item=>(
        <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </div>
      ))}
      <h2>Total Amount : {cartState.totalAmount}</h2>
    </div>
  )
}

export default Cart
