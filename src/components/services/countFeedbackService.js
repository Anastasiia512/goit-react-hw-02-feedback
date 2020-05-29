export const countTotalFeedback = ({ good, neutral, bad }) =>
  good + neutral + bad;

export const countPositiveFeedbackPercentage = (good, total) => {
  if (good) {
    return Number(((good * 100) / total).toFixed(2));
  }
};
