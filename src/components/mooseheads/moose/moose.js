import React from 'react';
import PropTypes from 'prop-types';

const Moose = ({ title, copy, image }) => (
  <figure>
    {image.childImageSharp.fluid.src.includes('microsoft') ?
      <img src={image.childImageSharp.fluid.src} alt={title}/> :
      <img style={{maxHeight: 40}} src={image.childImageSharp.fluid.src} alt={title}/>
    }
  </figure>
);

Moose.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Moose;
