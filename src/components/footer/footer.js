import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';

const Footer = ({ children }) => <Container>{children}</Container>;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
