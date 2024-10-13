import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 10px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 Fëanor</p>
    </FooterContainer>
  );
}

export default Footer;
