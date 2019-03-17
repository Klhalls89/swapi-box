import React, { Component } from 'react';
import './App.scss';
import Cardholder from './components/Cardholder'

export class App extends Component {
  constructor() {
    super();
      this.state = {
        errorStatus: '',
        movie: {},
        people: [],
        places: [],
        vehicles: []

      };
  }

  componentDidMount = () => {
    this.getMovies()
  }

  getMovies(){
    const url = 'https://swapi.co/api/films/'
    fetch(url)
      .then(response => response.json())
      .then(films => this.assignMovie(films.results))
      .catch(error => {
        this.setState({
          errorStatus: 'Error in fetch'
        })
      })  
  }

  assignMovie = (movies) => {
    const ranMov = Math.floor(Math.random() * (7))
    const movie = movies[ranMov]
    this.setState ({
      movie
    })
  }

  getPeople = () => {
    const url = 'https://swapi.co/api/people/'
    fetch(url)
      .then(response => response.json())
      .then(people => this.getPeopleSpecies(people))
      .then(people => this.getPeoplePlanet(people))
      .then(people => this.setPeople(people))
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
    let peopleSpecies = people.results.map((person) => {
      return fetch(person.species)
      .then(species => species.json())
      .then(species => ({...person, species:species.name, language:species.language}))
      .catch(error => console.log(error.message)) 
    })
    return Promise.all(peopleSpecies)
  }

  getPeoplePlanet = (people) => {
    let peoplePlanet = people.map((person) => {
      return fetch(person.homeworld)
      .then(homeworld => homeworld.json())
      .then(homeworld =>({...person, homeworld:homeworld.name, population: homeworld.population}))
      .catch(error => console.log(error.message))  
    })
    return Promise.all(peoplePlanet)
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
