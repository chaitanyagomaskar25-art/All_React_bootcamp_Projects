import React from "react"; // Removed unused useState
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import { liked, disliked } from "../store/features/ProductSlice";
import CreateForm from "./Form";

const Product = () => {
  const products = useLoaderData();
  const like = useDispatch();
  
  const customRecipes = useSelector((state) => state.cart.customRecipes || []);
  const cartProducts = useSelector(state => state.cart.products); 

  const allProducts = [...customRecipes, ...products.recipes];
  
  return (
    <div>
      <CreateForm />

      {allProducts.map((p) => {
        const isCurrentlyLiked = cartProducts.some(item => item.id === p.id);

        return (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <h1>{p.name || p.title}</h1>
            <img src={p.image} alt={p.name || "Recipe Image"} loading="lazy" width="200" />
            <br />

            <button
              onClick={() =>
                isCurrentlyLiked ? like(disliked(p.id)) : like(liked(p))
              }
            >
              {isCurrentlyLiked ? "❤️ Unlike" : "🤍 Like"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
