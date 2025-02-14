import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = ({ feedback }) => {
  const totalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const averageScore = () => {
    const total = totalFeedback();
    if (total === 0) return 0;
    return ((feedback.good - feedback.bad) / total).toFixed(2);
  };

  const positiveFeedbackPercentage = () => {
    const total = totalFeedback();
    if (total === 0) return 0;
    return ((feedback.good / total) * 100).toFixed(2);
  };
  
  if (totalFeedback() === 0) {
    return <p>No feedback given.</p>;
  }
  return (
    <div>
      <p>
        Good: {feedback.good} | Neutral: {feedback.neutral} | Bad: {feedback.bad}
      </p>
      <p>
        Total feedback: {totalFeedback()} <br />
        Average score: {averageScore()} <br />
        Positive feedback: {positiveFeedbackPercentage()}%
      </p>
    </div>
  );
};

const Unicafe = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const good = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 });
    console.log("good");
  };

  const neutral = () => {
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    console.log("neutral");
  };

  const bad = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 });
    console.log("bad");
  };

  return (
    <div>
      <h3>Give feedback</h3>
      <p>Lorem ipsum.</p>
      <Button onClick={good} text="Good" />
      <Button onClick={neutral} text="Neutral" />
      <Button onClick={bad} text="Bad" />
      <Statistics feedback={feedback} />
    </div>
  );
};

export default Unicafe;
