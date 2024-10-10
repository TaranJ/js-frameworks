import React, { useState } from "react";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";

// Pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

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
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
