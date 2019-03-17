import React from 'react';
import Card from './Card'

function Cardholder({people}) {
  console.log('cardholder', people)
  const displayPeople = people.map((person) => {
    return <Card key={person.name} person={{name:person.name,
                                            homeworld: person.homeworld,
                                            population: person.population,
                                            species: person.species,
                                            language: person.language 
                                            }} />
  })
  
  return (
  <div className="card-div">
    {displayPeople}
  </div>
  )
}

export default Cardholder
