import React from 'react';
import Card from './Card'

function Cardholder({people}) {
  const displayPeople = people.map((person) => {
    console.log(person)
    return <Card key={person.name} person={{name:person.name,
                                            homeworld: 'homeworld'}} />
  })
  
  return (
  <div className="card-div">
    {displayPeople}
  </div>
  )
}

export default Cardholder