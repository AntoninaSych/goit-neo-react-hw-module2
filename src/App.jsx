import React, { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';

function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });


    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);


    const updateFeedback = (type) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [type]: prevFeedback[type] + 1,
        }));
    };

    // Функція для скидання стану
    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage =
        totalFeedback === 0
            ? 0
            : Math.round((feedback.good / totalFeedback) * 100);

    return (
        <div>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
            {totalFeedback === 0 ? (
                <Notification message="No feedback given" />
            ) : (
                <Feedback
                    good={feedback.good}
                    neutral={feedback.neutral}
                    bad={feedback.bad}
                    total={totalFeedback}
                    positivePercentage={positivePercentage}
                />
            )}
        </div>
    );
}

export default App;
