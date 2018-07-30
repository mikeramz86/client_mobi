import React from "react";
//delete styles and do it straightforward
import { connect } from 'react-redux';
import styles from "../comp_styles/addJob.css";
import { postJob } from "../actions";



export class AddJob extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      job: "",
      company: "",
      stage: "",
      status: "",
      date: "",
      comp: "",
      pros: "",
      cons: "",
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
    // console.log('handleSubmit', this.state);
    event.preventDefault()
    const jobObj = {
      job: this.state.job,
      company: this.state.company,
      stage: this.state.stage,
      status: this.state.status,
      date: this.state.date,
      comp: this.state.comp,
      pros: this.state.pros,
      cons: this.state.cons,
      notes: this.state.notes
    };
    this.props.dispatch(postJob(jobObj,this.props.authToken));
    

  };

  // showValidator() {
  //   this.setState({
  //     validateDisplay: !this.state.validateDisplay
  //   })
  // }




  render() {
    // console.log('authToken', this.props.authToken);
    let inputRequired;
    if (this.state.validateDisplay) {
      inputRequired = <div className={styles.validate}>Required</div>
    }


    return (
      <div className="job add">
        <form
          className={styles.formBox}
          onSubmit={this.handleSubmit}
        >
          <h2>Add Job </h2>
          {inputRequired}
          <label>Job:</label>
          <input
            name="job"
            type="text"
            // ref={input => (this.title = input)}
            placeholder="Software Engineer"
            className={styles.job}
            value={this.state.value}
            onChange={e => this.handleInput(e, "job")}
            maxLength="25"
          />

          <label>Company:</label>
          <input
            name="company"
            type="text"
            // ref={input => (this.title = input)}
            placeholder="Google"
            className={styles.job}
            value={this.state.value}
            onChange={e => this.handleInput(e, "company")}
            maxLength="25"
          />

          <div className={styles.stage}>
            <label>Stage:</label>
            <input
              name="stage"
              type="text"
              // ref={input => (this.stage = input)}
              placeholder="Phone Screen"
              className={styles.INSERT}
              value={this.state.value}
              onChange={e => this.handleInput(e, "stage")}
              maxLength="25"
            />
          </div>

          <div className={styles.status}>
            <label>Status:</label>
            <input
              name="status"
              type="Active"
              // ref={input => (this.status = input)}
              placeholder="Active"
              className={styles.INSERT}
              value={this.state.value}
              onChange={e => this.handleInput(e, "status")}
              maxLength="25"
            />
          </div>

          <div className={styles.date}>
            <label>Date:</label>
            <input
              name="date"
              type="text"
              // ref={input => (this.date = input)}
              placeholder="6/19/2018"
              className={styles.INSERT}
              value={this.state.value}
              onChange={e => this.handleInput(e, "date")}
              maxLength="25"
            />
          </div>

          <div className={styles.comp}>
            <label>Comp:</label>
            <input
              name="comp"
              type="text"
              // ref={input => (this.comp = input)}
              placeholder="60k"
              className={styles.INSERT}
              value={this.state.value}
              onChange={e => this.handleInput(e, "comp")}
              maxLength="25"
            />
          </div>

          <div className={styles.pros}>
            <label>pros:</label>
            <input
              name="pros"
              type="text"
              // ref={input => (this.pros = input)}
              placeholder="good job"
              className={styles.INSERT}
              value={this.state.value}
              onChange={e => this.handleInput(e, "pros")}
              maxLength="25"
            />
          </div>

          <div className={styles.cons}>
            <label>cons:</label>
            <input
              name="cons"
              type="text"
              // ref={input => (this.cons = input)}
              placeholder="did not stutter"
              className={styles.INSERT}
              value={this.state.value}
              onChange={e => this.handleInput(e, "cons")}
              maxLength="25"
            />
          </div>

          <div className={styles.status}>
            <label>Notes:</label>
            <input
              name="notes"
              type="text"
              // ref={input => (this.status = input)}
              placeholder="Other"
              className={styles.INSERT}
              value={this.state.value}
              onChange={e => this.handleInput(e, "notes")}
              maxLength="25"
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

// export default AddJob;
export default connect(mapStateToProps)(AddJob);