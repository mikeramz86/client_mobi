import React, { Component } from 'react';
import NavBar from './navbar';
import AddJob from './addJob';
import Job from './job';
// import UpdateJob from './updatejob';
import JobList from './joblist';
// import Landing from './components/landing';

// look at unit 2.1.3
// becareful with the setting up stage!! follow guide!!
// need to fix dashboard 7.24.18




class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                job: "Engineer",
                company: "Google",
                stage: "OSI",
                status: "Active",
                date: "6/24/18",
                comp: "500k",
                pros: "It's google",
                cons: "It's google",
            }]
        }
    }

    addJob(addJob) {
        this.setState({
            list: [...this.state.list, {addJob}]
        });
    }


    render() {
        console.log('this',this.state)
        const lists = this.state.list.map((list, index) =>
            <li key={index}>
                <JobList {...list}
                 />
            </li>
        );

        return (

            <div>
                <NavBar />
                <header className="App-header">
                    <h1 className="App-title">Welcome the Job App</h1>
                </header>
                <p>
                    Under Constructions.
                </p>
                
                <AddJob />
                {<Job />}
                {/* <UpdateJob /> */} 
                {/* <Landing/> */}
            </div>

        );
    }
}

export default Dashboard;