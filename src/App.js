import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import AddJob from './components/addJob';
import Job from './components/job';
import UpdateJob from './components/updatejob';



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
            <Job/>
            <UpdateJob/>

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
