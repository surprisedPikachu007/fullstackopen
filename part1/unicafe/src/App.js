import { useState } from "react";

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Stats = ({ good, neutral, bad }) => {
  let sum = good + neutral + bad;
  return (
    <>
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad} <br></br>
      average {(good - bad) / sum} <br></br>
      positive {(good / sum) * 100} %
    </>
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
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
