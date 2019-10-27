import React from 'react'
import ReactDOM from 'react-dom'

function PartObject(name, exercises) {
    this.name = name
    this.exercises = exercises
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
        new PartObject(part1, exercises1),
        new PartObject(part2, exercises2),
        new PartObject(part3, exercises3)
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Content = (props) => {
    let partsList = props.parts.map((part, key) => { return <Part key={key} name={part.name} exercises={part.exercises} />})
    return (
        <>
            {partsList}
        </>
    )
}

const Total = (props) => {
    let total = props.parts.map(part => part.exercises)
        .reduce((total, num) => total += num)

    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.name} {props.exercises}
            </p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))