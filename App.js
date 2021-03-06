import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const points = new Uint8Array(anecdotes.length)

  const copy = {...points}
   
  const [selected, setSelected] = useState(0)
  const newAnecdote = () => setSelected(getRandomInt(anecdotes.length))
  const addOne = () => copy[selected] += 1

  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {copy[selected]} votes
      <br />
      <Button
        onClick={addOne}
        text='vote'
      />
      <Button
        onClick={newAnecdote}
        text='next anecdote'
      />
    </div>
  )
}

export default App