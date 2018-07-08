import React from "react";
//if i see line 3 its because I should be importing something
import { Link } from "react-router-dom";
import "../comp_styles/navbar.css"

class NavBar extends React.Component {

  // logOut() {
  //   this.props.dispatch(logout())
  // }

  render() {

    return(
        <div className="navContainer">
          <Link to="/" className="headerLink">
            <h1>Job App</h1>
          </Link>
          <nav>
            <div className="navWide">
              <Link className="navLink" to="/">Login</Link>
              <Link className="navLink" to="/register">Signup</Link>
            </div>
          </nav>
      </div>
    )
  }

}

export default NavBar