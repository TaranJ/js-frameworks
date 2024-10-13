import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

function Layout({ cartItemCount, onCartClick, children }) {
  return (
    <PageWrapper>
      <Header cartItemCount={cartItemCount} onCartClick={onCartClick} />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageWrapper>
  );
}

export default Layout;
