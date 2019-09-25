import React from "react";
import {Link} from "gatsby";
import {Container} from "./nav.css";
import {Button} from "./../../button/button.css"

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
