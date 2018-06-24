import React from "react";
//if i see line 3 its because I should be importing something
// import { Link } from "react-router-dom";
import "../comp_styles/sidenav.css"

class SideNav extends React.Component {

  // logOut() {
  //   this.props.dispatch(logout())
  // }

  render() {

    return(
        <div>
        <nav className="main-menu">
            <ul>
                <li>
                    <a href="dashboard.html">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Dashboard
                        </span>
                    </a>

                </li>

                <li>
                    <a href="dashboard.html">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Add Job
                        </span>
                    </a>

                </li>


                <li className="has-subnav">
                    <a href="#">
                        <i className="fa fa-list fa-2x"></i>
                        <span className="nav-text">
                            1st Touch
                        </span>
                    </a>

                </li>


                <li>
                    <a href="#">
                        <i className="fa fa-area-chart fa-2x"></i>
                        <span className="nav-text">
                            Technical Phone Screen
                        </span>
                    </a>
                </li>

                <li>
                    <a href="setup.html">
                        <i className="fa fa-cogs fa-2x"></i>
                        <span className="nav-text">
                            Onsite
                        </span>
                    </a>
                </li>
                <li>
                    <a href="signup.html">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="nav-text">
                            Offer
                        </span>
                    </a>
                </li>

            </ul>
            <ul className="logOut">
                <li>
                    <a href="index.html">
                        <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    )
  }

}

export default SideNav