import React from 'react';
import PropTypes from 'prop-types';

const Moose = ({ title, copy, image }) => {
console.log(image)
return(
  <figure>
    <img style={{maxHeight: 40}} src={image.childImageSharp.fluid.src} alt={title} />
  </figure>
)};

Moose.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Moose;
