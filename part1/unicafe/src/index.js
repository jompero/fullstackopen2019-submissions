import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const values = [good, neutral, bad]

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
        <div>
            <Header title={'Give feedback'} />
            <Button onClickHandler={incrementGood} text="good"></Button>
            <Button onClickHandler={incrementNeutral} text="neutral"></Button>
            <Button onClickHandler={incrementBad} text="bad"></Button>
        </div>
        <div>
            <Statistics values={values} />
        </div>
    </div>
  )
}

const Header = ({title}) => { return (<div><h1>{title}</h1></div>) }

const Button = ({onClickHandler, text}) => { 
    return (
        <button onClick={onClickHandler}>{text}</button>
    )
}

const Statistics = ({values}) => {
    let total = values.reduce((a, b) => a + b)
    let stats
    if (total === 0) {
        stats = (        
            <>
                No feedback given
            </>
        )
    } else {
        let average = (values[0] - values[2]) / total
        let positive = "".concat(values[0] / total * 100).concat(" %")

        stats = (
            <table>
                <Stat name="Good" value={values[0]} />
                <Stat name="Neutral" value={values[1]} />
                <Stat name="Bad" value={values[2]} />
                <Stat name="Total" value={total} />
                <Stat name="Average" value={average} />
                <Stat name="Positive" value={positive} />
            </table>
        )
    }

    return (
        <div>
            <Header title="Statistics" />
            {stats}
        </div>
    )
}

const Stat = ({name, value}) => {
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{value}</td>
            </tr>
        </tbody>

    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)