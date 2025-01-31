import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const StatisticsCalculation = ({ feedback }) => {
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

  return (
    <>
      <tr>
        <td>Total feedback</td>
        <td>{totalFeedback()}</td>
      </tr>
      <tr>
        <td>Average score</td>
        <td>{averageScore()}</td>
      </tr>
      <tr>
        <td>Positive feedback</td>
        <td>{positiveFeedbackPercentage()}%</td>
      </tr>
    </>
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
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Statistics components</th>
          </tr>
          <tr>
            <th>Feedback</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine text="good" value={feedback.good} />
          <StatisticsLine text="neutral" value={feedback.neutral} />
          <StatisticsLine text="bad" value={feedback.bad} />
          <StatisticsCalculation feedback={feedback} />
        </tbody>
      </table>
    </div>
  );
};

export default Unicafe;
