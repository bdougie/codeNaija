import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../highlights.css';

const Highlight = ({ children }) => <Item>{children}</Item>;

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Highlight;

