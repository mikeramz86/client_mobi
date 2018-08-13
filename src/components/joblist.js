import React from "react";
import {connect} from 'react-redux'
import Job from './job';


import {getJobList} from '../actions';

import "../comp_styles/joblist.css"

class JobList extends React.Component {

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
      </div>
    )
  }

}

const mapStateToProps = state => ({
  jobs: state.job.jobs,
  authToken: state.auth.authToken

})

export default connect(mapStateToProps)(JobList);




