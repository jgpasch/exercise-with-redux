import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../../actions/exerciseActions';
import MyButton from './MyButton';
import TextInput from '../../common/TextInput';


class MultiStepForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      step: this.props.step
    };
    this.update = this.update.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  update(event) {
    this.props.update(event);
  }

  nextStep() {
    this.props.continue(this.props.step);
  }

  render() {
    switch(this.props.step) {
      case 1:
        return (<div>
                 <MyButton step={this.nextStep} value="continue" />
                 <TextInput name="name" onChange={this.update} placeholder="name" />
               </div>);
      case 2:
        return (<div> <MyButton step={this.nextStep} value="continue" />
                 <TextInput name="weight" onChange={this.update} placeholder="weight" />
               </div>);
      case 3:
        return (<div> <MyButton step={this.nextStep} value="continue" />
                 <TextInput  name="sets" onChange={this.update} placeholder="sets" />
               </div>);
      case 4:
        return (<div> <MyButton step={this.nextStep} value="continue" />
                 <TextInput  name="reps" onChange={this.update} placeholder="reps" />
               </div>);
      default:
        return (<div> <MyButton step={this.nextStep} value="submit" />
               </div>);
    }
  }
}

MultiStepForm.propTypes = {
  step: PropTypes.number.isRequired
};

export default MultiStepForm;
