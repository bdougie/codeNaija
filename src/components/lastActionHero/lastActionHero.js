import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './lastActionHero.css';

const LastActionHero = ({ children }) => <Container>{children}</Container>;

LastActionHero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LastActionHero;


