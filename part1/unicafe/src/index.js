import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => {
  return (
  <tr>   
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
  )
}

const Feedback = ({ good, neutral, bad}) => {
  if((good + neutral + bad) === 0) {
    return (
      <div>No feedback given </div>
    )
  }

  return(
    <div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return(
    <div>
      <Statistic text="good" value={good}/>
      <Statistic text="neutal" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={good + neutral + bad}/> 
      <Statistic text="average" value={(good - bad)/(good + neutral + bad)}/> 
      <Statistic text="positive" value={100*good/(good + neutral + bad) + '%'}/>    
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)