import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CountdownTimer from 'react-awesome-countdowntimer';
import { Container } from './countdown.css';

const Countdown = ({ children, eventDate }) => (
  <Container> 
    <h2>Countdown</h2>
    <CountdownTimer endDate={moment('26/10/2019 09:00:00', 'DD hh:mm:ss')}/> 
  </Container>
);

Countdown.propTypes = {
  children: PropTypes.node.isRequired,
  eventDate: PropTypes.array
};

export default Countdown;
