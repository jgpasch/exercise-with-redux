import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/authActions';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp({email, password}) {
    console.log('email', email);
    console.log('password', password);

    //call action creator
    // this.props.signupUser({email, password});
  }

  render() {
    const { handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSignUp)}>
          <Field component={renderField} name="email" type="text" label="email" myId="email1"/>

          <Field component={renderField} name="password" type="password" label="password" myId="password1" />

          <Field component={renderField} name="passwordConfirm" type="password" label="confirm password" myId="passwordConfirm1"/>
          <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  //check for empty email
  if (!values.email) {
    errors.email = 'Email is required';
  }

  // check for valid email
  if(values.email && values.email.indexOf('@') < 0) {
    errors.email = "email is invalid";
  }
  

  console.log(values.password);
  console.log(values.passwordConfirm);

  if ( (values.password && values.passwordConfirm) && (values.password != values.passwordConfirm)) {
    errors.password = "password must match";
    errors.passwordConfirm = errors.password;
  }

  return errors;
}

const renderField = ({myId, name, input, label, type, meta: { touched, error, invalid}}) => {
  console.log(input);
  console.log(type);
  const groupClass = touched ? (invalid ? 'form-group has-error':'form-group has-success') : 'form-group';
  console.log(groupClass);

  const inputClass = touched ? (invalid ? 'form-control form-control-danger has-error':'form-control form-control-success') : 'form-control';
  console.log(inputClass);

  const glyph = touched ? (invalid ? 'form-control-feedback glyphicon glyphicon-remove' : 'form-control-feedback glyphicon glyphicon-ok' ) : 'form-control-feedback';

  return (<div className={groupClass}>
            <label>{label}</label>
            <div className="has-feedback">
              <input {...input} id={myId} type={type} className={inputClass}/>
              <span className={glyph} ></span>
            </div>
          </div>);
};


const signupForm = reduxForm({
  form: 'signup',
  validate
})(SignUp);

export default connect(null, actions)(signupForm);