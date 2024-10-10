import React from "react";
import { Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function CartIcon({ itemCount, onClick }) {
  return (
    <div className="cart-icon-container" onClick={onClick}>
      <Button variant="link">
        <FaShoppingCart size={24} style={{ color: "black" }} />
        {itemCount > 0 && <Badge>{itemCount}</Badge>}
      </Button>
    </div>
  );
}

export default CartIcon;
