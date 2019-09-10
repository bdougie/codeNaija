import React from 'react';
import PropTypes from 'prop-types';
import Moose from 'components/mooseheads/moose';
import { Container } from './mooseheads.css';

const Mooseheads = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Moose {...item} key={i} />
    ))}
  </Container>
);

Mooseheads.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Mooseheads;
