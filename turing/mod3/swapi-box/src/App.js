import React, { Component } from 'react';
import './App.scss';
import Cardholder from './components/Cardholder'

class App extends Component {
  constructor() {
    super();
      this.state = {
        movie: {},
        people: [],
        places: [],
        vehicles: []

      };
  }

  componentDidMount = () => {
    const url = 'https://swapi.co/api/films/'
    fetch(url)
      .then(response => response.json())
      .then(films => this.assignMovie(films.results))
      .catch(error => console.log(error.message))  
  }

  getPeople = () => {
    const url = 'https://swapi.co/api/people/'
    fetch(url)
      .then(response => response.json())
      .then(people => this.setPeople(people.results))
      .catch(error => console.log(error.message))  
  }

  setPeople = (people) => {
      this.setState ({
        people
      })
      this.getPeopleSpecies(people)
      this.getPeoplePlanet(people)
  }

  getPeopleSpecies = (people) => {
    console.log('getPeopleSpecies', people)
  }

  getPeoplePlanet = (people) => {
    console.log('getPeoplePlanet', people)
  }

  assignMovie = (movies) => {
    const ranMov = Math.floor(Math.random() * (7))
    const movie = movies[ranMov]
    this.setState ({
      movie
    })
  }

  render() {
   const {people} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <button>Favorites</button>
          <h1 className="logo">SWAPI</h1>
          <button onClick={this.getPeople}>People</button>
          <button>Places</button>
          <button>Vehicles</button>
        </header>
        <Cardholder people={people}/> 
          <h2 className="film-name">{this.state.movie.title}</h2>
          <h2 className="release-date">{this.state.movie.release_date}</h2>
          <p className="movie-crawler">{this.state.movie.opening_crawl}</p>
      </div>
    );
  }
}

export default App;
