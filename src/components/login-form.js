import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import { Link } from "react-router-dom";
import "../comp_styles/login.css";



export class LoginForm extends React.Component {
    onSubmit(values) {
        // console.log('this is values', values);
        return this.props.dispatch(login(values.EmailAddress, values.password));
    }
    


    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className="login-form">
                <Link className="closed-button" to='/'>X</Link>

                <form
   
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}

                    <label htmlFor="EmailAddress">Email Address</label>
                    <Field
                        component={Input}
                        type="text"
                        name="EmailAddress"
                        id="EmailAddress"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                    <button className="lobtn" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    
                    <div className="demo">
                        <div><b> Demo User Login: </b> demo@test.com  </div>
                        <div><b>Demo Password:</b> 1234567890 </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
