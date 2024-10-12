import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckoutSuccessPage() {
  return (
    <div className="checkout-success-page container mt-5">
      <h2>Order Successful!</h2>
      <p>Your order has been placed successfully. Thank you for shopping with us!</p>
      <Link to="/">
        <Button variant="primary">Go Back to Store</Button>
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
