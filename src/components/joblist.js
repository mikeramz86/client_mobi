import React from "react";
import "../comp_styles/joblist.css"

class JobList extends React.Component {


  render() {

    return(
        <div className="list">
            <div>Company:</div>
            <div>Job:</div>
            <div>Stage:</div>
            <div>Status:</div>

            <button className=" loginbtn">View</button>            

        </div>
    )
  }

}

export default JobList