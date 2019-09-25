import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './about.css';

const Description = ({ children }) => <Container>{children}</Container>;

Description.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Description;


