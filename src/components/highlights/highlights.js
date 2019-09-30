import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './highlights.css';

const Highlights = ({ children }) => <Container>{children}</Container>;

Highlights.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Highlights;


