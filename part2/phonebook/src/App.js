import React, { useState } from 'react'
import { Entries } from './components/Entry'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ filter, setFilter ] = useState('')

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