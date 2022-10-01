import React from 'react'

const Person = ({person}) => {
  return (
    <div><h2>{person.name} {person.surname} {person.age} {person.email} {person.gender}</h2></div>
  )
}

export default Person