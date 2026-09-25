import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const data = [
    { id: 1, title: "Mechanical Keyboard", price: 120 },
    { id: 2, title: "Wireless Mouse", price: 50 },
    { id: 3, title: "Desk Pad", price: 25 },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(cart.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));
  const increaseQty = (id) => setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decreaseQty = (id) => {
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="app-wrapper">
      <section>
        <h2 style={{ marginBottom: "24px" }}>Shop Components</h2>
        <div className="products-grid">
          {data.map((item) => (
            <div key={item.id} className="product-card">
              <h3>{item.title}</h3>
              <span className="price-tag">${item.price}</span>
              <button className="btn-base btn-add" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <aside className="cart-sidebar">
        <div className="cart-header">
          <h2 style={{ margin: 0, fontSize: "1.3rem" }}>Basket</h2>
          <span style={{ color: "var(--text-muted)" }}>{cart.length} items</span>
        </div>

        {cart.length === 0 ? (
          <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "20px" }}>
            Your basket is empty.
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <small>${item.price} each</small>
                </div>
                <div className="qty-row">
                  <div className="qty-controls">
                    <button className="btn-base btn-qty" onClick={() => decreaseQty(item.id)}>-</button>
                    <span style={{ margin: "0 10px", fontWeight: "bold" }}>{item.qty}</span>
                    <button className="btn-base btn-qty" onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button className="btn-base btn-remove" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}

            <div className="total-section">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span style={{ fontWeight: 600 }}>Total Amount</span>
                <span style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--primary)" }}>
                  ${totalPrice}
                </span>
              </div>
              <button className="btn-base btn-add" style={{ padding: "14px" }}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default App;