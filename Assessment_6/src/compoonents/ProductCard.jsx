import { memo } from 'react';

export const ProductCard = memo(({ product, onAddToCart }) => {
  return (
    <div key={product.id}>
      <h3 >{product.title}</h3>
      <img src={product.thumbnail} alt="" />
      <p >${product.price}</p>
      <button  onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
});
