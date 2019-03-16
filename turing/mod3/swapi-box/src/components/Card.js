import React, { Component } from 'react';
import './Card.Scss'

function Card(props) {
   return (
      <div className="card">
        <h3 className="card-head">{props.person.name}</h3>
        <button className="card-fav-btn">Favorite</button>
      </div>
  )
}

export default Card;