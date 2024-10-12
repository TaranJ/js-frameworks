import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Product({ id, title, description, price, image }) {
  return (
    <Card className="mb-4 d-flex flex-column">
      <Card.Img variant="top" src={image.url} alt={title} style={{ height: "250px", objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
        </div>
        <Link to={`/product/${id}`}>
          <Button variant="primary" className="mt-3">
            View Product
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
