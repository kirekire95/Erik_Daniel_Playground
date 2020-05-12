import React, { useReducer } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

const initialCount = {
  firstCounter: 0,
  secondCounter: 10
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value
      };
    case "decrement":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value
      };
    case "increment2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value
      };
    case "decrement2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value
      };
    case "reset":
      return initialCount;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      <StyledDiv>
        <p>Count: {count.firstCounter}</p>
        <p>Count: {count.secondCounter}</p>
        <StyledGridContainer>
          <StyledButton
            onClick={() => dispatch({ type: "increment", value: 1 })}
          >
            Increment
          </StyledButton>
          <StyledButton
            onClick={() => dispatch({ type: "decrement", value: 1 })}
          >
            Decrement
          </StyledButton>
          <StyledButton
            onClick={() => dispatch({ type: "increment2", value: 5 })}
          >
            Increment 5
          </StyledButton>
          <StyledButton
            onClick={() => dispatch({ type: "decrement2", value: 5 })}
          >
            Decrement 5
          </StyledButton>
          <StyledButton onClick={() => dispatch({ type: "reset" })}>
            Reset
          </StyledButton>
        </StyledGridContainer>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0px 0px 16px -2px rgba(176, 186, 237, 1);

  div {
    margin-bottom: 0.5rem;
  }

  p {
    background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    width: 8rem;
    margin: 0;
    margin-bottom: 0.5rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;

  &:nth-child(1) {
    grid-column: 1/1;
    grid-row: 1 / 2;
  }

  &:nth-child(2) {
    grid-column: 1/1;
    grid-row: 2 / 2;
  }

  &:nth-child(3) {
    grid-column: 2 / 2;
    grid-row: 1 / 2;
  }

  &:nth-child(4) {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
  }

  &:nth-child(5) {
    grid-row: 3 / 3;
    grid-column: 1/-1;
  }
`;

const StyledGridContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
`;

export default CounterReducer;
