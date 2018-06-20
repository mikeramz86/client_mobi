import React from "react";
import { Link } from "react-router-dom";
import styles from "../comp_styles/NavBar.css"

export class NavBar extends React.Component {

  // logOut() {
  //   this.props.dispatch(logout())
  // }

  render() {

    return(
        <div className={styles.navContainer}>
          <Link to="/" className={styles.headerLink}>
            <h1>Job App</h1>
          </Link>
          <nav>
            <div className={styles.navWide}>
              <Link className={styles.navLink} to="/">Login</Link>
              <Link className={styles.navLink} to="/stats">Dashboard</Link>
            </div>
          </nav>
      </div>
    )
  }

}

export default NavBar