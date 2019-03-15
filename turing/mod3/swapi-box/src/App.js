import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
      this.state = {
        movie: {}
      };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(films => this.assignMovie(films.results))
      .catch(error => console.log(error.message))  
  }

  assignMovie(movies){
    const ranMov = Math.floor(Math.random() * (7))
    const movie = movies[ranMov]
    this.setState({
      movie
    })
    console.log(this.state.movie)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">SWAPI</header>
        <h2 className="film-name">{this.state.movie.title}</h2>
        <h2 className="release-date">{this.state.movie.release_date}</h2>
        <p className="movie-crawler">{this.state.movie.opening_crawl}</p>
      </div>
    );
  }
}

export default App;
