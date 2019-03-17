import React, { Component } from 'react';
import './Card.Scss'

function Card(props) {
  let {name, homeworld, population, species, language} = props.person
   return (
      <div className="card">
        <h3 className="card-head">{name}</h3>
        <button className="card-fav-btn">Favorite</button>
        <h4>homeworld: {homeworld}</h4>
        <h4>population: {population}</h4>
        <h4>species: {species}</h4>
        <h4>language: {language}</h4>
      </div>
  )
}
export default Card;