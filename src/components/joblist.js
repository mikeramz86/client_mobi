import React from "react";
import {connect} from 'react-redux'
import Job from './job';
import UpdateJob from './updatejob';


import {getJobList} from '../actions';

import "../comp_styles/joblist.css"

class JobList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    if (this.props.authToken) {
      this.refreshJobList();
    }
}

  refreshJobList() {
    this.props.dispatch(getJobList(this.props.authToken));

  }


  render() {
    let jobs = this.props.jobs.map(job => {
      return ( 
      <Job 
        key={job.id}
        id={job.id}
        company={job.company}
        job={job.job}
        stage={job.stage}
        status={job.status}
        date={job.date}
        comp={job.comp}
        pros={job.pros}
        cons={job.cons}
        notes={job.notes}
        refreshJobList={this.refreshJobList.bind(this)}
        />
        
      )
    })

    return (
      <div>
        {jobs}
        {/* {updateJobs} */}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  jobs: state.job.jobs,
  updateJobs: state.job.updateJobs,
  authToken: state.auth.authToken

})

export default connect(mapStateToProps)(JobList);

// JobList.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.shape({
//     job: PropTypes.string,
//     company: PropTypes.string,
//     stage: PropTypes.string,
//     status: PropTypes.string,
//     date: PropTypes.string,
//     comp: PropTypes.string,
//     pros: PropTypes.string,
//     cons: PropTypes.string
//   })).isRequired



