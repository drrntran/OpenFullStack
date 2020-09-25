import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Pass parts={parts} into content
// Compenent Part will have the property 'partNum' which will then access names and exercises
const Content = (props) => {
  return (
    <div>  
      <Part partNum={props.parts[0]}/>
      <Part partNum={props.parts[1]}/>
      <Part partNum={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const Part = (props) => {
  return (
      <div>
        <p>{props.partNum.name} {props.partNum.exercises}</p>
      </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises:  10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))