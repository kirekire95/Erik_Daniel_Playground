import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterParagraph>
        Copyright &copy; Erik & Daniel {new Date().getFullYear()}
      </FooterParagraph>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: #a52a2a;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px -2px rgba(176, 186, 237, 1);
`;

const FooterParagraph = styled.p`
  text-align: center;
  font-size: inherit;
  color: #fff;
`;

export default Footer;
