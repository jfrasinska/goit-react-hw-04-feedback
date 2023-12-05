import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistics">
    <p className="statistics-item">Good: {good}</p>
    <p className="statistics-item">Neutral: {neutral}</p>
    <p className="statistics-item">Bad: {bad}</p>
    <p className="statistics-item">Total: {total}</p>
    <p className="statistics-item">
      Positive Percentage: {positivePercentage}%
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
