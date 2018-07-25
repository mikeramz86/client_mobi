import React from "react";
//if i see line 3 its because I should be importing something
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import "../comp_styles/navbar.css"
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

class NavBar extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }

    return (
      <div className="navContainer">
        <Link to="/dashboard" className="headerLink">
          <h1>mobi</h1>
        </Link>
        <nav>
          <div className="navWide">
            <Link className="navLink" to="/login">Login</Link>
            <Link className="navLink" to="/registration-page">Signup</Link>
              {logOutButton}
          </div>
        </nav>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);


//Mentor Note: Do not commit things that are not working. Instead create a branch instead. Looking into git stash?

//REMEMBER INCREMENTAL WORKS!!!