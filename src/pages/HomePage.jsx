import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; //
import { fetchProducts } from "../utils/api";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchProducts();
        setProducts(response.data);
        setFilteredProducts(response.data);
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
      <Helmet>
        <title>Fëanor</title>
        <meta name="description" content="An eCom store." />
      </Helmet>
      <SearchBar products={products} />
      <Row className="mb-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="d-flex mb-4">
            <Product id={product.id} title={product.title} description={product.description} price={product.price} image={product.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
