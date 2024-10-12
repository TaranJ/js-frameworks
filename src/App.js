import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles/styles.scss";

// Components
import Layout from "./components/Layout";

// Pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

function App() {
  const [cart, setCart] = useState([]); // Initialize cart state to store products
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle cart icon click
  const handleCartClick = () => {
    navigate("/checkout"); // Navigate to the CheckoutPage
  };

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Clear cart items
  };

  return (
    <Layout
      cartItemCount={cart.length}
      onCartClick={handleCartClick} // Pass the click handler to Layout
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} clearCart={clearCart} />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
