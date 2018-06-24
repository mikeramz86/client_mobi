import React, { Component } from 'react';
import NavBar from './navbar';
import AddJob from './addJob';
import Job from './job';
import UpdateJob from './updatejob';
import JobList from './joblist';
// import SideNav from './components/sidenav';
// import Landing from './components/landing';


class Dashboard extends Component {
  render() {
    return (

            <div>
                <NavBar/>
                {/* <SideNav/> */}
                <header className="App-header">
                <h1 className="App-title">Welcome the Job App</h1>
                </header>
                <p>
                Under Constructions.
                </p>
                <JobList/>
                <AddJob/>
                <Job/>
                <UpdateJob/>
                {/* <Landing/> */}
            </div>

    );
  }
}

export default Dashboard;