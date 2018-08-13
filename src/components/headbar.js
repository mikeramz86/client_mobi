import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import "../comp_styles/navbar.css"
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

class HeadBar extends React.Component {

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

export default connect(mapStateToProps)(HeadBar);



