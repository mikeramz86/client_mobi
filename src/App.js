import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Dashboard from './components/dashboard';



class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">


            <Dashboard/>


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


NOTES 6/19
- Make sure you can submit things is priority
- grabbing Data and making a list

- Create list componenet
  - see if data is coming through the way I want too
- Being able to view jobs and update it

OTHER NOTES
- Get form to show up
- Get it to submit
- Get it to Ajax
  - user = []
  - think of jquery creating mock database is another option

*/
