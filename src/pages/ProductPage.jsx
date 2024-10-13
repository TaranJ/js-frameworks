import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/api";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, ListGroup, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const PriceContainer = styled.div`
  margin: 10px 0;
`;

const DiscountedPrice = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #ca6a6c;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  margin-left: 0.5rem;
  color: gray;
  font-size: 0.8rem;
`;

const Savings = styled.span`
  margin-left: 0.5rem;
  color: red;
  font-size: 0.9rem;
`;

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
    addToCart(product);
  };

  return (
    <div className="product-page container mt-5 mb-4">
      <Helmet>
        <title>{product.title} | Fëanor</title>
        <meta name="description" content="An eCom store." />
      </Helmet>
      <Card>
        <Row>
          <Col md={6}>
            <CardImg variant="top" src={product.image.url} alt={product.title} />
          </Col>
          <Col md={6}>
            <CardBody className="mb-5">
              <CardTitle>{product.title}</CardTitle>
              <CardText>{product.description}</CardText>

              <PriceContainer>
                <DiscountedPrice>Price: ${product.discountedPrice.toFixed(2)}</DiscountedPrice>
                {product.discountedPrice < product.price && (
                  <>
                    <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
                    <Savings>Save ${(product.price - product.discountedPrice).toFixed(2)}</Savings>
                  </>
                )}
              </PriceContainer>

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
