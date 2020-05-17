import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.css';

const Section = ({ title }) => <h2 className={styles.statsTitle}>{title}</h2>;

Section.propTypes = {
  title: propTypes.string.isRequired,
};
export default Section;
