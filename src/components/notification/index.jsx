import React from 'react';
import styles from './styles.module.css';

const Notification = ({ message }) => <p className={styles.notificationMessage}>{message}</p>;

export default Notification;
