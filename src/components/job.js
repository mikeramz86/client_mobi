import React from "react";
import "../comp_styles/job.css"
import UpdateJob from './updatejob';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showDetails: false
    }
  }

  toggleShowDetails(toggle) {
    this.setState({
        showDetails: toggle
    });
  }

  updateJobDetails(toggle){
    this.setState({
      updateDetails: toggle
    });
  }



  render() {
    if (!this.state.showDetails) {
        return (
        <div className="list">
          <div>Company:</div>
          <div>Job:</div>
          <div>Stage:</div>
          <div>Status:</div>
  
          <button className=" loginbtn"
            onClick={() => this.toggleShowDetails(true)}
          >View</button>
  
        </div>
        );
    } else {
        return (
          <UpdateJob/>
      );
    }
    
    return (
        <div className="job">
            <div>Company:</div>
            <div>Job:</div>
            <div>Stage:</div>
            <div>Status:</div>
            <div>Date:</div>
            <div>Comp:</div>
            <div>Pros:</div>
            <div>Cons:</div>
            <button className=" loginbtn"
              onClick={() => this.updateJobDetails(true)}>Update</button>
            <button className="loginbtn" type="submit">Delete</button>
        </div>
    )
  }

}

export default Job






