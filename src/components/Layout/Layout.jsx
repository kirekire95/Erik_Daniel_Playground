import React from "react";
import styled from "styled-components";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </React.Fragment>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
  margin: auto;
`;

export default Layout;
