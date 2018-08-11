import React, { Component } from 'react';
import logo from './img/movie-icon.png';
import './App.css';

class App extends Component {
  render() {
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
            <form id="search">
              <input className="form-control" id="searchTxt" placeholder="Amor Con Frijoles"/>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
