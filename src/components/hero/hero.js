import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './hero.css';

const Hero = ({ children }) => <Container>{children}</Container>;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;

