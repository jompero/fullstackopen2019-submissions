import React from 'react'

const Course = (props) => {
    const {course} = props;
    console.log(`Course: Id=${course.id} Name=${course.name}`)
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
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    let partsList = props.parts.map((part) => { 
        return <Part key={part.id} part={part} exercises={part} />
    })
    return (
        <>
            {partsList}
        </>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce( (s, p) => s += p.exercises, 0 )
    console.log(`Total excersises: ${total}`)
    return (
        <p>
            <b>Number of exercises {total}</b>
        </p>
    )
}

const Part = ({part}) => {
    console.log(`Part: Id=${part.id} Name=${part.name}`)
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

export default Course