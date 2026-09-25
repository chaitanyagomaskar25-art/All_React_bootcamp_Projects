import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { disliked } from '../store/features/ProductSlice';

const Cart = () => {
    const products = useSelector(state=> state.cart.products)
    console.log(products);
    const disLike = useDispatch()
  return (
    <div>
     {products.map(p=>(
             <div key={p.id}>
                 <h1>{p.name}</h1>
                 <img src={p.image} alt="" loading='lazy'/>
                 <button onClick={()=>disLike(disliked(p.id))}>DisLike</button>
             </div>
           ))}
    </div>
  )
}

export default Cart
