import React from "react";
import "../comp_styles/job.css"

class Job extends React.Component {


  render() {

    return(
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