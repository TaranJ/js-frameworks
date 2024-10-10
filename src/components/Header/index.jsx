import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";

function Header({ cartItemCount, onCartClick }) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand as={Link} to="/">
        Fëanor
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
        <div className="ml-auto">
          <CartIcon itemCount={cartItemCount} onClick={onCartClick} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
