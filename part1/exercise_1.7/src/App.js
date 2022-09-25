import React from 'react';
import {useState} from 'react';

const Statistics = (props) => {
  // ...
}

export function App(props) {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedbacks, setTotalFeedbacks] = useState(0)
  const [score, setScore] = useState(0)

  const AddOneFeedback = () => setTotalFeedbacks(totalFeedbacks+1)

  const calculateScore = (props) => {
    if ('bad' === props){
      setScore(score-1);
    }else if ('good' === props){
      setScore(score+1);
    }
  };

  const clickGood = () => {
    setGood(good+1);
    AddOneFeedback();
    calculateScore('good');
  };

  const clickNeutral = () => {
    setNeutral(neutral+1);
    AddOneFeedback();
  };

  const clickBad = () => {
    setBad(bad+1);
    AddOneFeedback();
    calculateScore('bad');
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
      <h2> *************</h2>
      <h3> Total feedbacks: {totalFeedbacks}</h3>
      <h3> Total score average: {score/totalFeedbacks}</h3>
      <h3> positive: {(good/totalFeedbacks)*100}%</h3>
      </div>
    </div>
  )
}