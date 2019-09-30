import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './hero.css';

const Hero = ({ children, image }) => <Container image={image}>{children}</Container>;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;

