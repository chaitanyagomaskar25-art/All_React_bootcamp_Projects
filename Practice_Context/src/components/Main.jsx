import React from 'react'
import Product from './Product'
import Cart from './Cart'

const Main = () => {
  return (
    <div style={{display:'flex', gap: "100px"}}>
      <Product />
      <Cart />
    </div>
  )
}

export default Main
