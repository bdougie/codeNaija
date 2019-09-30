import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './purpleBox.css';

const PurpleBox = ({ children }) => <Container>{children}</Container>;

PurpleBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PurpleBox;


