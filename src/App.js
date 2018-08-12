import React, { Component } from 'react';
import logo from './img/movie-icon.png';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
                    value: '',
                    movies: []
                  }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.movieSelect = this.movieSelect.bind(this);
  }


  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let search = this.state.value;
    //console.log('Buscar: '+ this.state.value);
    axios.get('//www.omdbapi.com?s='+ search +'&apikey=2ca8ae02')
      .then((response) =>{
        console.log(response);
        let movies = response.data.Search;
        this.setState({movies: movies})                
      });
  }

  movieSelect(id){
    window.open('//www.imdb.com/title/'+id);
  }

  render() {
    const output = this.state.movies.map((movie, index) =>{ 
        return(
            <div className="col-md-3">
              <div className="text-center">
                <img src={movie.Poster} alt="Poster"/>
                <h5>{movie.Title} </h5>
                <button key={index} onClick={() =>this.movieSelect(movie.imdbID)} className="btn btn-success"> Movie Details </button>
              </div>
            </div>
          )   
      })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container primary">
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                <img src={logo} className="App-logo" alt="logo" title="movieFinder" />
              </a>
            </div>
          </div>
        </nav>

        <div className="float">
          <div className="container">
            <h3>Search the movies you want it!</h3>
            <form id="search" onSubmit={this.handleSubmit}>
              <input className="form-control" id="searchTxt" onChange={this.handleChange}/>
            </form>
          </div>
        </div>

        <div className="container">
          <div className="row" id="movies">
          { output }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
