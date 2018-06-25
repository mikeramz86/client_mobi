import React, { Component } from 'react';
import NavBar from './navbar';
import AddJob from './addJob';
import Job from './job';
import UpdateJob from './updatejob';
import JobList from './joblist';
// import Landing from './components/landing';


//need a constructor for list of jobs so we can add that as a state


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

    addjob(addjob) {
        this.setState({
            list: [...this.state.list, {
                addjob
            }]
        });
    }


    render() {
        // const cards = this.state.cards.map((card, index) =>
        //     <li key={index}>
        //         <AddJob {...card} />
        //     </li>
        // );

        return (

            <div>
                <NavBar />
                <header className="App-header">
                    <h1 className="App-title">Welcome the Job App</h1>
                </header>
                <p>
                    Under Constructions.
                </p>

                <JobList
                    list={this.state.list}


                />

                <AddJob />
                <Job />
                <UpdateJob />
                {/* <Landing/> */}
            </div>

        );
    }
}

export default Dashboard;