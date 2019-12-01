import React from 'react';

export const Entries = (props) => {
    const {persons} = props;
    const {filter} = props;
    const {onDelete} = props;

    console.log("Handling entry data: ", persons)
    const entries = persons
      .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map(person => <Entry key={person.name} person={person} onDelete={onDelete}/>)
    return (
      <div>
        {entries}
      </div>
    )
}

export const Entry = ({person, onDelete}) => {
  const styles = {
    container: {
      marginTop: 5,
    },
    entry: {
      
    },
    button: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'red',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      marginRight: 5,
    }
  }
  return (
    <div style={styles.container}>
      <div><button style={styles.button} onClick={() => onDelete(person)}>X</button>{person.name} {person.number}</div>
    </div>)
}

export default Entry