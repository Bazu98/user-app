import React from 'react'
import Person from './Person'

const List = () => {
    const persons = [
        {
            id:1,
            name:'Vaso',
            surname:"Bazuashvili",
            age:26,
            email:"v.bazuashvi@gmail.com",
            gender:"male"
        },
        {
            id:2,
            name:'Demna',
            surname:"Mikava",
            age:20,
            email:"d.miqadze@gmail.com",
            gender:"male"
        }
]
const personList = persons.map(person =>  <Person  key={person.id} person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default List