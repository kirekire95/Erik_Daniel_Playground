import React from "react";
import styled from "styled-components";
import Counter from "./../counter/Counter";

const Home = () => {
  return (
    <StyledSectionContainer>
      <Counter />
    </StyledSectionContainer>
  );
};

const StyledSectionContainer = styled.section`
  min-height: inherit;
`;

export default Home;
