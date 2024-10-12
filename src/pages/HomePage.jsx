import React, { useState, useEffect } from "react";
import { fetchProducts } from "../utils/api";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  const [products, setProducts] = useState([]); // Ensure products is initialized as an array
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchProducts();
        console.log(response);
        setProducts(response.data); // Store the data in the state
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <Container className="homepage">
      <Row className="mb-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="d-flex mb-4">
            <Product id={product.id} title={product.title} description={product.description} price={product.price} image={product.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
