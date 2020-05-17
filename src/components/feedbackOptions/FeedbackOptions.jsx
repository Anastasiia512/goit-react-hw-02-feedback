import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={styles.feedback}>
    <button className={styles.feedbackButton} name="good" onClick={onLeaveFeedback} type="button">
      Good
    </button>
    <button className={styles.feedbackButton} name="neutral" onClick={onLeaveFeedback} type="button">
      Neutral
    </button>
    <button className={styles.feedbackButton} name="bad" onClick={onLeaveFeedback} type="button">
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
