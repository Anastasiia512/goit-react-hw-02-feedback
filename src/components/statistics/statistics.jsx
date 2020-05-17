import React from 'react';
import styles from './styles.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.statlist}>
    <li className={styles.statlistItem}>
      <span>Good: </span>
      <span>{good}</span>
    </li>
    <li className={styles.statlistItem}>
      <span>Neutral: </span>
      <span>{neutral}</span>
    </li>
    <li className={styles.statlistItem}>
      <span>Bad: </span>
      <span>{bad}</span>
    </li>
    <li className={styles.statlistItem}>
      <span>Total: </span>
      <span>{total}</span>
    </li>
    <li className={styles.statlistItem}>
      <span>Positive feedback: </span>
      <span>{positivePercentage}%</span>
    </li>
  </ul>
);

export default Statistics;
