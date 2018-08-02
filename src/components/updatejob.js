import React from "react";
import { connect } from 'react-redux';

import styles from "../comp_styles/updatejob.css";
import { updateJob } from "../actions";



export class UpdateJob extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      job: props.job,
      company: props.company,
      stage: props.stage,
      status: props.status,
      date: props.date,
      comp: props.comp,
      pros: props.pros,
      cons: props.cons,
      notes: props.notes,
      validateDisplay: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('is this?', this)
    this.props.dispatch(updateJob(this.props.authToken,this.state));
    this.props.refreshJobList();
    this.props.toggleShowDetails();

  };

  render() {


    let inputRequired;
    
    if (this.state.validateDisplay) {
      inputRequired = <div className={styles.validate}>Required</div>
    }


    return (
      <div className="job">
        <form
          className={styles.formBox}
          onSubmit={this.handleSubmit}
        >
          <h2>Update Job</h2>
          <hr/>

          {inputRequired}
          <div className={styles.status}>
            <label>Company:</label>
            <input
              name="company"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder=""
              className={styles.job}
              value={this.state.company}
              onChange={e => this.handleInput(e, "company")}
              maxLength="25"
            />
          </div>

          <div className={styles.status}>
            <label>Job:</label>
            <input
              name="job"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder=""
              className={styles.job}
              value={this.state.job}
              onChange={e => this.handleInput(e, "job")}
              maxLength="25"
            />
          </div>

          <div className={styles.status}>
            <label>Status:</label>
            <input
              name="status"
              type="Active"
              ref={input => (this.textInput = input)}
              placeholder=""
              className={styles.INSERT}
              value={this.state.status}
              onChange={e => this.handleInput(e, "status")}
              maxLength="25"
            />
          </div>

          <div className={styles.stage}>
            <label>Stage:</label>
            <input
              name="stage"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder=""
              className={styles.INSERT}
              value={this.state.stage}
              onChange={e => this.handleInput(e, "stage")}
              maxLength="25"
            />
          </div>

          <div className={styles.date}>
            <label>Date:</label>
            <input
              name="date"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder="6/19/2018"
              className={styles.INSERT}
              value={this.state.date}
              onChange={e => this.handleInput(e, "date")}
              maxLength="25"
            />
          </div>

          <div className={styles.comp}>
            <label>Comp:</label>
            <input
              name="comp"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder="60k"
              className={styles.INSERT}
              value={this.state.comp}
              onChange={e => this.handleInput(e, "comp")}
              maxLength="25"
            />
          </div>

          <div className={styles.pros}>
            <label>pros:</label>
            <input
              name="pros"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder=""
              className={styles.INSERT}
              value={this.state.pros}
              onChange={e => this.handleInput(e, "pros")}
              maxLength="25"
            />
          </div>

          <div className={styles.cons}>
            <label>cons:</label>
            <input
              name="cons"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder=""
              className={styles.INSERT}
              value={this.state.cons}
              onChange={e => this.handleInput(e, "cons")}
              maxLength="25"
            />
          </div>

          <div className={styles.cons}>
            <label>notes:</label>
            <input
              name="notes"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder=""
              className={styles.INSERT}
              value={this.state.notes}
              onChange={e => this.handleInput(e, "notes")}
              maxLength="100"
            />
          </div>


          <div className="">
            <button type="submit" className="updatebtn">
              Save
              </button>
            <button
              className="updatebtn"
              onClick={() => {
                this.props.toggleForm();
              }}
            >
              Cancel
              </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  authToken: state.auth.authToken
});

export default connect(mapStateToProps)(UpdateJob);