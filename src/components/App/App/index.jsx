import React, { Component } from 'react';
import propTypes from 'prop-types';
import Section from '../../SectionTitle/index';
import FeedbackOptions from '../../feedbackOptions/FeedbackOptions';
import Statistics from '../../statistics/statistics';
import Notification from '../../notification/index';

export default class App extends Component {
  static defaultProps = {
    step: 1,
    message: 'No feedback given',
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  static propTypes = {
    step: propTypes.number,
    message: propTypes.string,
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    total: propTypes.number,
    positivePercentage: propTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + this.props.step,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      percentage: (prevState.good * 100) / prevState.total ,
    }));
  };

  render() {
    const total = this.state.total;
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions onLeaveFeedback={this.handleClick} />
        <Section title="Statistics" />
        {total > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.state.percentage}
          />
        ) : (
          <Notification message="No feedback given!"></Notification>
        )}
      </>
    );
  }
}
