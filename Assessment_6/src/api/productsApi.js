export const getAllProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    return data.products
}

export const addToCartApi = async (productId) => {
  const productRes = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!productRes.ok) throw new Error('Failed to fetch product details');
  
  const res = await fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [{ id: productId, quantity: 1 }],
    }),
  });

  if (!res.ok) throw new Error('Failed to add item to cart');
  return res.json();
};


