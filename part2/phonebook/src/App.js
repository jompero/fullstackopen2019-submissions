import React, { useState, useEffect } from 'react'
import { Entries } from './components/Entry'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './services/persons';
import Snackbar from './components/Snackbar';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState({});

  useEffect(() => {
    Persons.getAll()
      .then(data => {
        console.log("rendering", data);
        setPersons(data);
      });
  }, []);

  const displayMessage = (text, type) => {
    console.log('message', {text, type});
    setMessage({text, type});
    setTimeout(() => setMessage({}), 5000);
  }

  const addPerson = (newPerson) => {
    const foundPerson = persons.find(person => person.name === newPerson.name);
    if (foundPerson) {
      
      const confirmation = window.confirm(
        `${newPerson.name} already found in the phonebook. Change number to ${newPerson.number}?`);

      if (confirmation) {
        const updatedPerson = {...foundPerson, number: newPerson.number}
        Persons.updatePerson(updatedPerson)
          .then(setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson)))
          .catch(error => {
            console.log("error updating person", error);
            displayMessage(`Person ${foundPerson.name} already removed.`, 'danger');
            setPersons(persons.filter(person => person.id !== updatedPerson.id));
          });
      }
    
    } else {
      Persons.addPerson(newPerson).then(data => {
        console.log("person added", data);
        displayMessage(`Person ${newPerson.name} added.`, 'success');
        setPersons(persons.concat(data));
      });
    }
  }

  const deletePerson = (person) => {
    const confirmation = window.confirm(`Are you sure you want to delete entry\n${person.name}`);
    console.log(`delete person ${person} confirmation`, confirmation);
    if (confirmation) {
      Persons.deletePerson(person)
      .then(data => {
          console.log("person deleted", person);
          setPersons(persons.filter(p => p.id !== person.id));
      });
    } else console.log("person not deleted", person);
  }

  const handleFilterChanged = (newFilter) => setFilter(newFilter)

  const styles = {
    container: {
      marginLeft: 25,
    }
  }

  return (
    <div style={styles.container}>
      <h2>Phonebook</h2>
      <PersonForm handleForm={addPerson} />
      <h2>Numbers</h2>
      <Filter filterChangedHandler={handleFilterChanged}/>
      <Entries persons={persons} filter={filter} onDelete={deletePerson} />
      <Snackbar label={message.text} type={message.type}/>
    </div>
  )
}

export default App