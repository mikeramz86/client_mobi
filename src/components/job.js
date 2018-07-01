import React from "react";
import "../comp_styles/job.css"

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
            <button className=" loginbtn">Update</button>
            <button className="loginbtn" type="submit">Delete</button>
        </div>
    )
  }

}

export default Job






