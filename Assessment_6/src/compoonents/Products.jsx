import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { lazy, Suspense, useCallback, useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { addToCartApi, getAllProducts } from "../api/productsApi";
const CheckoutModal = lazy(()=> import("./CheckoutModal")) ;

function Products() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [isopen, setIsopen] = useState(false);
  const [sortBy, setSortBy] = useState("price-asc");
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const { data: cartCount = 0 } = useQuery({
    queryKey: ["cartCount"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/carts");
      if (!res.ok) throw new Error("Failed to fetch carts");
      const data = await res.json();
      const totalItems = data.carts.reduce(
        (acc, cart) => acc + cart.totalQuantity,
        0,
      );
      return totalItems;
    },
  });

  const addToCartMutation = useMutation({
    mutationFn: addToCartApi,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["cartCount"] });
      const previousCartCount = queryClient.getQueryData(["cartCount"]);

      queryClient.setQueryData(["cartCount"], (old = 0) => old + 1);

      return { previousCartCount };
    },
    onError: (err, variables, context) => {
      if (context?.previousCartCount !== undefined) {
        queryClient.setQueryData(["cartCount"], context.previousCartCount);
      }
      alert(`Error adding to cart: ${err.message}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });

  const handleAddToCart = useCallback(
    (productId) => {
      addToCartMutation.mutate(productId);
    },
    [addToCartMutation],
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return 0;
      });
  }, [products, search, sortBy]);

  if (isLoading) {
    return (
      <div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (isError) return <div>Error loading products.</div>;

  return (
    <div>
      <div>
        <h1>Product Catalog</h1>
        <div>
          <span>
            Cart Count: <strong>{cartCount}</strong>
          </span>
         <button onClick={()=>{console.log("chekcout")
            setIsopen(prev=> !prev)
         }}>Proceed to Checkout</button>
         {isopen && <Suspense fallback={<h1>loding.....</h1>}>
            <CheckoutModal />
            </Suspense>}
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div style={{display:"flex", gap: '10px', flexWrap: 'wrap', margin: '10px auto', width: '80%'}}>
        {filteredProducts.length >0 ? filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        )): <p>No products available</p>}
      </div>
    </div>
  );
}

export default Products;
