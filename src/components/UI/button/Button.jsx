import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <ButtonStyle className={props.className} {...props} onClick={props.onClick}>
      {props.children}
    </ButtonStyle>
  );
}

export default Button;

const ButtonStyle = styled.button`
  padding: 1.5rem 3rem;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  background-color: ${props => (props.primary ? "white" : "palevioletred")};
`;
