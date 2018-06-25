import React from "react";
import PropTypes from 'prop-types';

import "../comp_styles/joblist.css"

class JobList extends React.Component {
  constructor(props) {
    super(props);
    console.log('this is props', props);
  }


  render() {

    return (
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

JobList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    job: PropTypes.string,
    company: PropTypes.string,
    stage: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    comp: PropTypes.string,
    pros: PropTypes.string,
    cons: PropTypes.string
  })).isRequired
};


//ADD it so you can see it in the app {}