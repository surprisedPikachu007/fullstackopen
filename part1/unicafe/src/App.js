import { useState } from "react";

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  let sum = good + neutral + bad;
  return sum > 0 ? (
    <>
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad} <br></br>
      all {sum} <br></br>
      average {(good - bad) / sum} <br></br>
      positive {(good / sum) * 100} %
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
