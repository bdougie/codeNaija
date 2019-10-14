import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';
import { Container } from './countdown.css';

const Countdown = ({ children, eventDate }) => (
  <Container> 
    <h2>Countdown</h2>
    <CountdownTimer endDate={moment(eventDate, 'DD hh:mm:ss')}/> 
  </Container>
);

Countdown.propTypes = {
  children: PropTypes.node.isRequired,
  eventDate: PropTypes.string.isRequired
};

export default Countdown;
