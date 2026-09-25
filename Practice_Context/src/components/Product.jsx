import React from "react";
import { useDispatchState } from "../context/cartContext";
import DATA from "./DATA";

const Product = () => {
    const dispatch = useDispatchState();

  return (
    <div>
       {DATA.map((item) => (
        <div style={{border:'1px solid black',padding:'10px', margin:'20px'}} key={item.id}>
        <h1 >{item.title}</h1>
        <p>{item.price}</p>
        <button className="border p-1 rounded-2xl" onClick={()=>dispatch({type:"ADD", payload: item})}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
