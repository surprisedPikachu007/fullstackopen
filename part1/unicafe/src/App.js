import { useState } from "react";

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Stat = ({ name, val }) => {
  return (
    <>
      {name} {val} <br></br>
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
      <Stat name={"good"} val={good} />
      <Stat name={"neutral"} val={neutral} />
      <Stat name={"bad"} val={bad} />
    </div>
  );
};

export default App;
