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
    return (
      <div>
        <p>{person.name} {person.number}</p><button onClick={() => onDelete(person)}>X</button>
      </div>)
}

export default Entry