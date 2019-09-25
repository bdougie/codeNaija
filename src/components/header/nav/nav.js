import React from "react";
import {Link} from "gatsby";
import {Container} from "./nav.css";
import styled from "styled-components";

// moves this to a Component
export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #F5A623;
  border: none;
  color: #000;
  border: solid #F5A623;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/">GitHub</a>
      </li>
      <li>
        <Link to="/blacktocats">Blacktocats</Link>
      </li>
      <li>
        <a href="#">FAQ's</a>
      </li>
      <li>
        <a href="https://forms.gle/D3y3VVxTiugGPekk9">
          <Button>Register Now</Button>
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
