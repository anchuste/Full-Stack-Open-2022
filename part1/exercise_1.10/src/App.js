import React from 'react';
import {useState} from 'react';

const Statistics = (props) => {

  const totalFeedbacks = props.good + props.neutral + props.bad;
  const totalScore = props.good - Math.abs(props.bad);

  if (totalFeedbacks === 0){
    return(
      <div>
        <h1> Statistics</h1>
        <h3> No Feedback given!!</h3>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1> Statistics</h1>
        <h3> Good: {props.good}</h3>
        <h3> Neutral: {props.neutral}</h3>
        <h3> Bad: {props.bad}</h3>
        <h2> *************</h2>
        <h3> Total feedbacks: {totalFeedbacks}</h3>
        <h3> Total score average: {totalScore/totalFeedbacks}</h3>
        <h3> positive: {(props.good/totalFeedbacks)*100}%</h3>
      </div>
    )
  }
}

const ButtonFeedback = (props) => {

  //console.log('props: ', props);

  return(
    <>
      <button onClick={props.click}> {props.name} </button>
    </>
  )
}

export function App(props) {
  
  const [good, setGood] = useState(0);
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
      <ButtonFeedback name='Good' click={clickGood}></ButtonFeedback>
      <ButtonFeedback name='Neutral' click={clickNeutral}></ButtonFeedback>
      <ButtonFeedback name='Bad' click={clickBad}></ButtonFeedback>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}