import React from "react";
//delete styles and do it straightforward
import styles from "../comp_styles/updatejob.css";

export class UpdateJob extends React.Component {

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
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
  }

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
          {inputRequired}
          <label>Job:</label>
          <input
            name="job"
            type="text"
            ref={input => (this.textInput = input)}
            placeholder={this.props.job}
            className={styles.job}
            value={this.state.value}
            onChange={e => this.handleInput(e, "job")}
            maxLength="25"
          />

          <div className={styles.status}>
            <label>Status:</label>
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
            <label>Stage:</label>
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
            <label>Date:</label>
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
            <label>Comp:</label>
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
            <label>pros:</label>
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
            <label>cons:</label>
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

export default UpdateJob;