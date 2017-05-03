import React, {Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }

  handleFormSubmit({email, password}) {
    this.props.loginUser({email,password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: {email, password }} = this.props;

    return (
            <div className="auth-form-container">
              <div className="auth-form-wrap">
                <form onSubmit={handleSubmit(this.handleFormSubmit)} className="auth-form">
                  <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" className="form-control" />
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password" component="input" type="password" className="form-control" />
                  </fieldset>
                  {this.renderAlert()}
                  <button action="submit" className="btn btn-primary center-me">Sign In</button>
                </form>
              </div>
            </div>);
  }
}

const reduxFormOptions = {
  form: 'login',
  fields: ['email', 'password']
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(reduxForm(reduxFormOptions)(Login));