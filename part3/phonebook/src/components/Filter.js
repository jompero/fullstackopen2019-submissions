import React, {useState} from 'react'

const Filter = (props) => {
    const [ filter, setFilter ] = useState('')
  
    const handleTextChange = (event) => {
      setFilter(event.target.value)
      props.filterChangedHandler(event.target.value)
    }

    const styles = {
        container: {
            marginTop: 15,
            marginBottom: 15,
        }
    }
    
    return (
        <div style={styles.container}>
            Filter: <input value={filter} onChange={handleTextChange} />
        </div>
    )
}

export default Filter