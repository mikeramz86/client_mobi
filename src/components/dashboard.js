import React, { Component } from 'react';
import HeadBar from './headbar';
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
          showAlert: false,
          alertElement: ""
        }
      }
    
      showAlert(el){
          this.setState({
              showAlert: true,
              alertElement: el
    
            }
          )
      }

      closeAlert() {
          this.setState({
              showAlert: false
          })
      }



    render() {
        return (

            <div>
                <HeadBar />
                <AddJob 
                    showAlert={this.showAlert.bind(this)}
                    closeAlert={this.closeAlert.bind(this)}
                />
                <JobList />
            </div>

        );
    }
}

export default Dashboard;