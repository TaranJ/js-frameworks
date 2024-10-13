import React from "react";
import { Helmet } from "react-helmet";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
`;

const TotalPrice = styled.h5`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 1rem;
`;

function CheckoutPage({ cart, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart(); // Clear the cart before navigating
    navigate("/checkout-success"); // Navigate to the CheckoutSuccessPage
  };

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, product) => total + product.discountedPrice, 0);

  return (
    <CheckoutContainer className="container">
      <Helmet>
        <title>Checkout | Fëanor</title>
        <meta name="description" content="An eCom store." />
      </Helmet>
      <Heading>Your Shopping Cart</Heading>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cart.map((product, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center">
              <ProductImage src={product.image.url} alt={product.title} />
              <div>
                <div>{product.title}</div>
                <div>Price: ${product.discountedPrice.toFixed(2)}</div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {cart.length > 0 && (
        <>
          <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
    </CheckoutContainer>
  );
}

export default CheckoutPage;
