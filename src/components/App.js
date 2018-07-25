
// import React from 'react';
// import {connect} from 'react-redux';
// import {Router} from 'react-router-dom';

// import NavBar from './navbar';
// import Landing from './landing';
// import Dashboard from './dashboard';
// import RegistrationPage from './registration-page';

// export class App extends React.Component {

//   render() {
//     return (
//       <Router>
//           <div className="App">
//             <NavBar/>
//             <Landing/>
//             <Route exact path="/landing" component={Landing} />
//             <Route exact path="/dashboard" component={Dashboard} />
//             <Route exact path="/register" component={RegistrationPage} />


//           </div>
//       </Router>
//     );
//   }
// }


// const mapStateToProps = state => ({
//   hasAuthToken: state.auth.authToken !== null,
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(App)




















import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../comp_styles/App.css';

import Dashboard from './dashboard';
import NavBar from './navbar';
import Landing from './landing'
import LogIn from './login-form';





class App extends Component {

  render() {
    return (
      <Router>
          <div className="App">

            <NavBar/>
            <Landing/>

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LogIn} />



          </div>
      </Router>
    );
  }
}

export default App;


//Incremental Process!!!!!!!!!!!!
// Comment out new code we had work out the part that works
// Start out with code that works
// add a line a time
//if you do know what the code does maybe add a few lines


