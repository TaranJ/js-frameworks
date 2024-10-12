import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/api";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, ListGroup, Row, Col } from "react-bootstrap";

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetchProductById(id);
        setProduct(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct();
  }, [id]);

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (isError) {
    return <div>Error loading product details</div>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Call addToCart with the product
  };

  return (
    <div className="product-page container mt-5 mb-4">
      <Card>
        <Row>
          <Col md={6}>
            <CardImg variant="top" src={product.image.url} alt={product.title} />
          </Col>
          <Col md={6}>
            <CardBody className="mb-5">
              <CardTitle>{product.title}</CardTitle>
              <CardText>{product.description}</CardText>

              <CardText>
                <strong>Price: ${product.discountedPrice.toFixed(2)}</strong>
                {product.discountedPrice < product.price && (
                  <>
                    <span style={{ textDecoration: "line-through", marginLeft: "0.5rem" }}>${product.price.toFixed(2)}</span>
                    <span style={{ marginLeft: "0.5rem", color: "red" }}>Save ${(product.price - product.discountedPrice).toFixed(2)}</span>
                  </>
                )}
              </CardText>

              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </CardBody>

            <CardFooter>
              <h5>Reviews:</h5>
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review.id}>
                    <strong>{review.username}</strong>: {review.description}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </CardFooter>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ProductPage;
