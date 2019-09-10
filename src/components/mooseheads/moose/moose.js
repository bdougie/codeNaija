import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Moose = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  </figure>
);

Moose.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Moose;
