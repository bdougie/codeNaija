import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './gridBox.css';

const Grid = ({ children }) => (
  <Container>{children}</Container>
);

Grid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;
