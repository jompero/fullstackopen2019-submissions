import React, {useState} from 'react'

const Filter = (props) => {
    const [ filter, setFilter ] = useState('')
  
    const handleTextChange = (event) => {
      setFilter(event.target.value)
      props.filterChangedHandler(event.target.value)
    }
    
    return (
        <div>
            <input value={filter} onChange={handleTextChange} />
        </div>
    )
}

export default Filter