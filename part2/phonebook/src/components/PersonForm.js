import React, { useState } from 'react'

const PersonForm = (props) => {
    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')
  
    const handleNameChange = (event) => {
      setName(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      setNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleForm({name: name, number: number})
    }

    return (    
    <form>
        <div>
            Name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>
            Number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
            <button type="submit" onClick={handleSubmit}>Add</button>
        </div>
    </form>)
}

export default PersonForm