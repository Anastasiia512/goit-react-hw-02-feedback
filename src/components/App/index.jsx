import React, { Component } from 'react';
import Section from '../SectionTitle/index';
import Statistics from '../statistics/statistics';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Notification from '../notification/index';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../services/countFeedbackService';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback({ ...this.state });
    const positivePercentage = countPositiveFeedbackPercentage(good, total);
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions onLeaveFeedback={this.handleClick} />
        <Section title="Statistics" />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given!"></Notification>
        )}
      </>
    );
  }
}
