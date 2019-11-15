import React from 'react';

export const Entries = (props) => {
    const {persons} = props;
    const {filter} = props;

    console.log("Handling entry data: ", persons)
    const entries = persons
      .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map(person => <Entry key={person.name} person={person}/>)
    return (
      <div>
        {entries}
      </div>
    )
}

export const Entry = ({person}) => {
    return (<p>{person.name} {person.number}</p>)
}

export default Entry