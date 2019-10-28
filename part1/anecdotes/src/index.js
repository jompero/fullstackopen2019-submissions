import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [top, setTop] = useState(0)
  const randomQuote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const voteSelected = () => setVotes(() => {
        let newVotes = [...votes]
        newVotes[selected] += 1
        if (newVotes[selected] > top) setTop(selected)
        return newVotes
    }
  )

  return (
    <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <VotesCounter votes={votes[selected]}/>
        <div>
            <Button onClickHandler={randomQuote} text="Give me another!" />
            <Button onClickHandler={voteSelected} text="Vote" />
        </div>
        <h2>Most popular anecdote</h2>
        {anecdotes[top]}
    </div>
  )
}

const Button = ({onClickHandler, text}) => {
    return (
        <button onClick={onClickHandler}>{text}</button>
    )
}

const VotesCounter = ({votes}) => {
    return (
        <div>
            has {votes} votes
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