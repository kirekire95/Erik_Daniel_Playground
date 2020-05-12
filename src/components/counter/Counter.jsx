import React, { useState } from "react";
import styled from "styled-components";

import Button from "../UI/button/Button";
import styles from "../counter/Counter.module.css";
import CounterReducer from "../counter/CounterReducer";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <SurroundDiv>
      <StyledDiv>
        <h1>{count}</h1>
        <Button
          className={styles.extraStyle}
          style={{
            backgroundColor: "rgb(0, 235, 135)",
            marginBottom: "0.5rem"
          }}
          onClick={incrementHandler}
        >
          Increment!
        </Button>
        <Button
          style={{ backgroundColor: "#f30202" }}
          onClick={decrementHandler}
        >
          Decrement!
        </Button>
      </StyledDiv>
      <CounterReducer />
    </SurroundDiv>
  );
}

export default Counter;

const StyledDiv = styled.div`
  max-width: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0px 0px 16px -2px rgba(176, 186, 237, 1);

  h1 {
    background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    width: 8rem;
    height: 2rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
`;

const SurroundDiv = styled.div`
  min-height: inherit;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
