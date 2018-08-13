import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../comp_styles/App.css';

import Dashboard from './dashboard';
import NavBar from './navbar';
import Landing from './landing'
import LogIn from './login-form';
import SignUp from './registration-page';





class App extends Component {

  render() {
    return (
      <Router>
          <div className="App">

            <NavBar/>
            <Landing/>

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp}/>



          </div>
      </Router>
    );
  }
}

export default App;



