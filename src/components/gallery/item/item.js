import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Figure } from './item.css';

const Item = ({ title, copy, image }) => (
  <Figure>
    <div>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </div>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </Figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
