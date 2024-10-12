import React, { useState } from "react";
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);

    if (value) {
      const filteredSuggestions = products.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/product/${id}`);
  };

  return (
    <InputGroup className="mb-3 position-relative">
      <Form.Control placeholder="Search for products..." value={query} onChange={handleInputChange} />
      {suggestions.length > 0 && (
        <ListGroup className="position-absolute w-100" style={{ zIndex: 1000, marginTop: "2.5rem" }}>
          {suggestions.map((product) => (
            <ListGroup.Item key={product.id} action onClick={() => handleSuggestionClick(product.id)}>
              {product.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </InputGroup>
  );
}

export default SearchBar;
