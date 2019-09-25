import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './blurb.css';

const Blurb = ({ children }) => <Container>{children}</Container>;

Blurb.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blurb;


