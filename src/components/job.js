import React from "react";
import moment from "moment";
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
        let date = moment(this.props.date)
        let ago = date.fromNow()
        let dateFormat = date.format('M-DD-YYYY') + ` (${ago})`
        return (
        <div className="job">
            <div className="field"><strong>Company:</strong>     {this.props.company}</div>
            <div className="field"><strong>Job:</strong> {this.props.job}</div>
            <div className="field"><strong>Stage:</strong> {this.props.stage}</div>
            <div className="field"><strong>Status:</strong> {this.props.status}</div>
            <div className="field"><strong>Date:</strong> {dateFormat}</div>
            <div className="field"><strong>Comp:</strong> {this.props.comp}</div>
            <div className="field"><strong>Pros:</strong> {this.props.pros}</div>
            <div className="field"><strong>Cons:</strong> {this.props.cons}</div>
  
          <button className=" loginbtn"
            onClick={() => this.toggleShowDetails(true)}
          >Update Job</button>
  
        </div>
        );
    } else {
        return (
          <UpdateJob/>
      );
    }
    
  }

}

export default Job

// import React from "react";
// import "../comp_styles/job.css"
// import UpdateJob from './updatejob';

// class Job extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         showDetails: false
//     }
//   }

//   toggleShowDetails(toggle) {
//     this.setState({
//         showDetails: toggle
//     });
//   }

//   updateJobDetails(toggle){
//     this.setState({
//       updateDetails: toggle
//     });
//   }



//   render() {
//     if (!this.state.showDetails) {
//         return (
//         <div className="list">
//           <div>Company:</div>
//           <div>Job:</div>
//           <div>Stage:</div>
//           <div>Status:</div>
  
//           <button className=" loginbtn"
//             onClick={() => this.toggleShowDetails(true)}
//           >View</button>
  
//         </div>
//         );
//     } else {
//         return (
//           <UpdateJob/>
//       );
//     }
    
//     return (
//         <div className="job">
//             <div>Company:</div>
//             <div>Job:</div>
//             <div>Stage:</div>
//             <div>Status:</div>
//             <div>Date:</div>
//             <div>Comp:</div>
//             <div>Pros:</div>
//             <div>Cons:</div>
//             <button className=" loginbtn"
//               onClick={() => this.updateJobDetails(true)}>Update</button>
//             <button className="loginbtn" type="submit">Delete</button>
//         </div>
//     )
//   }

// }

// export default Job






