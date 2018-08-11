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

      </div>
    );
  }
}

export default App;
