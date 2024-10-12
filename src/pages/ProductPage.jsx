import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/api";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, ListGroup, Row, Col } from "react-bootstrap";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetchProductById(id);
        console.log(response);
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

              {product.discountedPrice === product.price ? (
                <CardText>Price: ${product.price}</CardText>
              ) : (
                <CardText>
                  <span style={{ textDecoration: "line-through", marginRight: "0.5rem" }}>${product.price}</span>
                  <strong>${product.discountedPrice}</strong>
                </CardText>
              )}

              <Button variant="primary">Add to Cart</Button>
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
