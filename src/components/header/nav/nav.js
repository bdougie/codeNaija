import React from "react";
import {Link} from "gatsby";
import {Container} from "./nav.css";
import {Button} from "./../../button/button.css"

const Nav = () => (
  <Container>
    <ul>
      <li>
        <a href="https://andela.com/" target="_blank">Andela</a>
      </li>
      <li>
        <a href="https://github.com/" target="_blank">GitHub</a>
      </li>
      <li>
        <Link to="/blacktocats">Blacktocats</Link>
      </li>
      <li>
        <a href="/#Faq">FAQ's</a>
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
