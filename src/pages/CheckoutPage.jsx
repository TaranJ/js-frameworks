import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cart, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart(); // Clear the cart before navigating
    navigate("/checkout-success"); // Navigate to the CheckoutSuccessPage
  };

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, product) => total + product.discountedPrice, 0);

  return (
    <div className="checkout-page container mt-5">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cart.map((product, index) => (
            <ListGroup.Item key={index}>
              <div>{product.title}</div>
              <div>Price: ${product.discountedPrice.toFixed(2)}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {cart.length > 0 && (
        <>
          <h5 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h5>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
