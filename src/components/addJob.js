import React from "react";
import styles from "../comp_styles/addJob.css";
import { connect } from "react-redux";

export class addJob extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        job: "",
        company: "",
        stage: "",
        status:"",
        date:"",
        comp:"",
        pros:"",
        cons:"",
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
      if (this.state.job.trim() === "") {
        this.showValidator()
      } else {
        this.props.dispatch(job(this.state));
        this.props.toggleForm()
        this.setState = {
            job: "",
            company: "",
            stage: "",
            status:"",
            date:"",
            comp:"",
            pros:"",
            cons:"",
        }
      }
    }
  
    showValidator() {
      this.setState({
        validateDisplay: !this.state.validateDisplay
      })
    }
  
    render() {
  
      let inputRequired;
      if (this.state.validateDisplay) {
        inputRequired = <div className={styles.validate}>Required</div>
      }
  
  
      return (
        <div className={styles.formAreaContain}>
          <form
            className={styles.formBox}
            onSubmit={this.handleSubmit}
          >
            {inputRequired}
            <input
              name="job"
              type="text"
              ref={input => (this.textInput = input)}
              placeholder="Software Engineer"
              className={styles.job}
              value={this.state.value}
              onChange={e => this.handleInput(e, "job")}
              maxLength="25"
            />

            <div className={styles.status}>
                <input
                name="status"
                type="Active"
                ref={input => (this.textInput = input)}
                placeholder="Active"
                className={styles.INSERT}
                value={this.state.value}
                onChange={e => this.handleInput(e, "status")}
                maxLength="25"
                />
            </div>

            <div className={styles.stage}>
                <input
                name="stage"
                type="text"
                ref={input => (this.textInput = input)}
                placeholder="Phone Screen"
                className={styles.INSERT}
                value={this.state.value}
                onChange={e => this.handleInput(e, "stage")}
                maxLength="25"
                />
            </div>

            <div className={styles.date}>
                <input
                name="date"
                type="text"
                ref={input => (this.textInput = input)}
                placeholder="6/19/2018"
                className={styles.INSERT}
                value={this.state.value}
                onChange={e => this.handleInput(e, "date")}
                maxLength="25"
                />
            </div>

            <div className={styles.comp}>
                <input
                name="comp"
                type="text"
                ref={input => (this.textInput = input)}
                placeholder="60k"
                className={styles.INSERT}
                value={this.state.value}
                onChange={e => this.handleInput(e, "comp")}
                maxLength="25"
                />
            </div>

            <div className={styles.pros}>
                <input
                name="pros"
                type="text"
                ref={input => (this.textInput = input)}
                placeholder="good job"
                className={styles.INSERT}
                value={this.state.value}
                onChange={e => this.handleInput(e, "pros")}
                maxLength="25"
                />
            </div>

            <div className={styles.cons}>
                <input
                name="cons"
                type="text"
                ref={input => (this.textInput = input)}
                placeholder="did not stutter"
                className={styles.INSERT}
                value={this.state.value}
                onChange={e => this.handleInput(e, "cons")}
                maxLength="25"
                />
            </div>


            <div className={styles.buttonBox}>
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
              <button
                className={styles.cancelButton}
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
  
  export default connect(null)(addJob);