import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Header>
    <div>
      <h1>Error 404 - Page could not be found</h1>
      <Link href="/">Back to home</Link>
    </div>
  </Header>
);

const Header = styled.header`
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: inherit;
  }
`;

export default NotFoundPage;
