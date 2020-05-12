import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Navlinks } from "../constants/Navlinks";

const NavBar = () => {
  return (
    <StyledNavbar>
      <h1>Navbar</h1>
      <ul>
        {Navlinks.map(link => {
          return (
            <li key={link.id}>
              <NavLink activeClassName="active" exact to={link.path}>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;

const StyledNavbar = styled.nav`
  background-color: #a52a2a;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: white;
  position: sticky;
  top: 0;
  box-shadow: 0px 0px 6px -2px rgba(176, 186, 237, 1);

  .active {
    color: blue;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: inherit;
      padding: 0 10px;
      transition: color 0.15s ease;

      &:hover {
        color: orangered;
      }
    }
  }
`;
