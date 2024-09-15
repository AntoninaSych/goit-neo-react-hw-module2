import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={styles.feedback}>
            <h2>Feedback Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
};

export default Feedback;
