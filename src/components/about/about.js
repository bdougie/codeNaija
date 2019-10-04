import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './about.css';

const About = ({ children }) => <Container>{children}</Container>;

About.propTypes = {
  children: PropTypes.node.isRequired,
};

export default About;
