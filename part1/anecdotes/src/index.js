import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const HasVotes = ({quote, votes}) => {
  return (
    <div>
      <tr>{quote}</tr>
      <tr>has {votes} votes </tr>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [totalVotes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))

  const mostVotes = totalVotes.indexOf(Math.max(...totalVotes))

  const handleVote = (addVote) => {
    const newVotes = [...totalVotes]
    newVotes[addVote] += 1
    const handlerVote = () => {
      setVotes(newVotes)
    }
    return handlerVote
  }

  const handleNextQuote = () => setSelected(getRandomInt(0,6))

  return (
    <div>
      <Header text="Anecdote of the Day" />
      <HasVotes quote={props.anecdotes[selected]} votes={totalVotes[selected]} />
      <Button handleClick={handleVote(selected)} text="vote"/>
      <Button handleClick={handleNextQuote} text="next anecdote"/>
      <Header text="Anecdote with most votes" />
      <HasVotes quote={props.anecdotes[mostVotes]} votes={totalVotes[mostVotes]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)