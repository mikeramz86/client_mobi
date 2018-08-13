import React, { Component } from 'react';
import HeadBar from './headbar';
import AddJob from './addJob';
import JobList from './joblist';





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

            <div aria-live="polite">
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