import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import * as exerciseActions from '../../../actions/exerciseActions';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    event.preventDefault();
    console.log(values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit}>
      <div>
        <label>Exercise</label>
        <div>
          <Field name="name" component="input" type="text" placeholder="exercise"/>
        </div>
      </div>
      <div>
        <label>Weight</label>
        <div>
          <Field name="weight" component="input" type="text" placeholder="exercise"/>
        </div>
      </div>
      <div>
        <label>Sets</label>
        <div>
          <Field name="sets" component="input" type="text" placeholder="exercise"/>
        </div>
      </div>
      <div>
        <label>Reps</label>
        <div>
          <Field name="reps" component="input" type="text" placeholder="exercise"/>
        </div>
      </div>
      <button type="submit">submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'create'
})(NewForm);