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
                <div className="login-image-wrapper">
                  <div className="login-dumbell"></div>
                </div>
                <form onSubmit={handleSubmit(this.handleFormSubmit)} className="auth-form">
                  <fieldset className="form-group">
                    <Field name="email" component="input" placeholder="email" className="form-control custom-input" />
                  </fieldset>

                  <fieldset className="form-group">
                    <Field name="password" component="input" type="password" placeholder="password" className="form-control custom-input" />
                  </fieldset>
                  {this.renderAlert()}
                  <button action="submit" className="btn custom-login-btn">Sign In</button>
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