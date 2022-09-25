import React from 'react';
import {useState} from 'react';

export function App(props) {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good+1)
  };

  const clickNeutral = () => {
    setNeutral(neutral+1)
  };

  const clickBad = () => {
    setBad(bad+1)
  };

  return (
    <div>
      <button onClick={clickGood}>
        Good
      </button>
      <button onClick={clickNeutral}>
        Neutral
      </button>
      <button onClick={clickBad}>
        Bad
      </button>
      
      <div>
      <h1> Statistics</h1>
      <h3> Good: {good}</h3>
      <h3> Neutral: {neutral}</h3>
      <h3> Bad: {bad}</h3>
      </div>
    </div>
  )
}