import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const StyledToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ca6a6c;
  }
`;

function Header({ cartItemCount, onCartClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#1d1d1d" }}>
      <Navbar.Brand as={Link} to="/">
        Fëanor
      </Navbar.Brand>
      <StyledToggleButton className="d-lg-none" onClick={handleToggle}>
        <FaBars />
      </StyledToggleButton>
      <Navbar.Collapse in={isExpanded}>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" onClick={handleToggle}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={handleToggle}>
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
