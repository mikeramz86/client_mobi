import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import "../comp_styles/login.css"

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        // console.log('values', values)
        const {username, password, FirstName, LastName, EmailAddress} = values;
        const user = {username, password, FirstName, LastName, EmailAddress};
        console.log('user', user)
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(EmailAddress, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h3> SIGN UP TODAY </h3>
                <label htmlFor="FirstName">First name</label>
                <Field component={Input} type="text" name="FirstName" />
                <label htmlFor="LastName">Last name</label>
                <Field component={Input} type="text" name="LastName" />
                <label htmlFor="Username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="EmailAddress">Email</label>
                <Field
                    component={Input}
                    type="text"
                    name="EmailAddress"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    className="submitLogInButton"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
