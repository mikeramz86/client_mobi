import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';



class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <NavBar/>
            <header className="App-header">
              <h1 className="App-title">Welcome the Job App</h1>
            </header>
            <p>
              Under Constructions.
            </p>
          </div>
      </Router>
    );
  }
}

export default App;
