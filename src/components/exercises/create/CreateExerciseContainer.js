import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import * as exerciseActions from '../../../actions/exerciseActions';
import TextInput from '../../common/TextInput';
import MyButton from './MyButton';
import MultiStepForm from './MultiStepForm';
import ButtonGroup from './ButtonGroup';

class CreateExerciseContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.nextStep = this.nextStep.bind(this);
    this.updateNewExercise = this.updateNewExercise.bind(this);
    this.redirect = this.redirect.bind(this);    
  }

  nextStep(step) {
    if (step == 5) {
      this.props.actions.createExercise(Object.assign({}, this.props.exercise, {category: 0}))
      .then(() => {
          toastr.success('Exercise saved successfully');        
          this.redirect();
          this.props.actions.loadExercises();
        });
    } else
      this.props.actions.nextStep(step);
  }

  redirect() {
    this.setState({
      saving: false
    });
    browserHistory.push('/');
  }

  updateNewExercise(event) {
    const field = event.target.name;
    const value = event.target.value;
    const exercise = this.props.exercise;

    this.props.actions.updateExercise(exercise, field,value);
  }

  render() {
    return (
      <div>
        <ButtonGroup />
        <MultiStepForm update={this.updateNewExercise} continue={this.nextStep} step={this.props.step} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    step: state.step,
    exercise: state.newExercise
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exerciseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateExerciseContainer);