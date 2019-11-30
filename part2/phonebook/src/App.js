import React, { useState, useEffect } from 'react'
import { Entries } from './components/Entry'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("Response", response.data)
        setPersons(response.data)
      })
  }, []);

  const addPerson = (person) => {
    if (persons.filter(p => p.name === person.name).length > 0) {
      alert(`${person.name} has already been added to the phonebook!`)
    } else {
      setPersons(persons.concat(person))
    }
  }

  const handleFilterChanged = (newFilter) => setFilter(newFilter)

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm handleForm={addPerson} />
      <h2>Numbers</h2>
      <Filter filterChangedHandler={handleFilterChanged}/>
      <Entries persons={persons} filter={filter} />
    </div>
  )
}

export default App