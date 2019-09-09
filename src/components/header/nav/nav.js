import React from "react";
import {Link} from "gatsby";
import {Container} from "./nav.css";

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blacktocats">GitHub Blacktocats</Link>
      </li>
      <li>
        <a href="https://github.com/">GitHub</a>
      </li>
      <li>
        <a href="mailto:blacktocats@github.com">Contact</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
