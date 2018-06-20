import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import AddJob from './components/addJob';



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
            <AddJob/>
          </div>
      </Router>
    );
  }
}

export default App;


/*

in order to check if comp are working
  1. import it to your main js which is app,js
  2. Add it it your code




*/
