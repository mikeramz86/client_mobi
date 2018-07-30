import React from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Job from './job';

import {getJobList} from '../actions';

import "../comp_styles/joblist.css"

class JobList extends React.Component {
  constructor(props) {
    super(props);
    console.log('this is props', props);
  }

  componentDidMount() {
    this.props.dispatch(getJobList(this.props.authToken));
    console.log('this is JL', getJobList);
}


  render() {
    let jobs = this.props.jobs.map(job => {
      return ( 
      <Job 
        key={job.id}
        company={job.company}
        job={job.job}
        stage={job.stage}
        status={job.status}
        date={job.date}
        comp={job.comp}
        pros={job.pros}
        cons={job.cons}
        />
      )
    })
  console.log('this.props', this.props);

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



