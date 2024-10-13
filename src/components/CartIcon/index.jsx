import React from "react";
import { Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartButton = styled(Button)`
  color: white;

  &:hover {
    color: #b5acbc;
  }

  &:focus {
    color: #b5acbc;
  }
`;

const StyledBadge = styled(Badge)`
  background-color: #ca6a6c !important;
`;

function CartIcon({ itemCount, onClick }) {
  return (
    <div className="cart-icon-container" onClick={onClick}>
      <CartButton variant="link">
        <FaShoppingCart size={24} />
        {itemCount > 0 && <StyledBadge>{itemCount}</StyledBadge>}
      </CartButton>
    </div>
  );
}

export default CartIcon;
