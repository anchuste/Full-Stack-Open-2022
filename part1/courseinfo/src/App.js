const Header = (props) =>{
  return(
    <div>
      <h2>
        {props.title}
      </h2>
    </div>
  )
};

const Content = (props) =>{
  return(
    <div>
      <p>
        {props.part1} {props.exercises1} <br/>
        {props.part2} {props.exercises2} <br/>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
};

const Total = (props) =>{
  var totalExercises = Number(props.exercises1) + 
  Number(props.exercises2) + Number(props.exercises3);
  return(
    <div>
      <p>
      Number of exercises: {totalExercises}
      </p>
    </div>
  )
};

const App = () => {
  return (
    <div>
      <Header title='Half Stack application development'/>
      <Content part1='Fundamentals of React'
                exercises1 = '10'
                part2 = 'Using props to pass data'
                exercises2 = '7'
                part3 = 'State of a component'
                exercises3 = '14'/>
      <Total exercises1 = '10' exercises2 = '7' exercises3 = '14'/>
    </div>
  )
}

export default App