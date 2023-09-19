import { useState } from "react";

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {text} {value}
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let sum = good + neutral + bad;
  let avg = (good - bad) / sum;
  let positive = (good / sum) * 100;
  return sum > 0 ? (
    <>
      <table>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={sum} />
        </tr>
        <tr>average {parseFloat(avg).toFixed(1)}</tr>
        <tr>positive {parseFloat(positive).toFixed(1) + " %"}</tr>
      </table>
    </>
  ) : (
    <p>no feedback given</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={"good"} handleClick={() => setGood(good + 1)} />
      <Button name={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button name={"bad"} handleClick={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
