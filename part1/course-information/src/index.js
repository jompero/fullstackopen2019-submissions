import React from 'react'
import ReactDOM from 'react-dom'

function PartObject(name, exercises) {
    this.name = name
    this.exercises = exercises
}

const App = () => {
  const course = {
        name: 'Half Stack application development',
        parts: [
            new PartObject('Fundamentals of React', 10),
            new PartObject('Using props to pass data', 7),
            new PartObject('State of a component', 14)]
        }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
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