import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './paddedBox.css';

const PaddedBox = ({ children }) => <Container>{children}</Container>;

PaddedBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PaddedBox;

