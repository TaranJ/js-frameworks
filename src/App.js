import React, { useState } from "react";
import "./styles.scss";

// Components
import Layout from "./components/Layout";

// Pages

function App() {
  const [cartItemCount, setCartItemCount] = useState(0); // Initialize cart item count

  const handleCartClick = () => {
    // Logic to open the cart page or handle cart click
    console.log("Cart clicked!");
  };

  // Function to update the cart item count (e.g., when items are added)
  const addToCart = () => {
    setCartItemCount(cartItemCount + 1); // Increment cart item count
  };
  return <Layout cartItemCount={cartItemCount} onCartClick={handleCartClick} />;
}

export default App;
