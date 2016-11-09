import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import * as exerciseActions from '../../../actions/exerciseActions';
import TextInput from '../../common/TextInput';
import MyButton from './MyButton';
// import MultiStepForm from './MultiStepForm';
import UnifiedForm from './UnifiedForm';
import ButtonGroup from './ButtonGroup';

class CreateExerciseContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.props.actions.initStep();
    this.nextStep = this.nextStep.bind(this);
    this.updateNewExercise = this.updateNewExercise.bind(this);
    this.redirect = this.redirect.bind(this);
    this.muscleGroupChosen = this.muscleGroupChosen.bind(this);
    this.state = {
      ready: false
    };
  }

  muscleGroupChosen() {
    this.props.actions.updateExercise({}, null, null);
    this.props.actions.nextStep(1);
    this.setState({
      ready: true
    });
  }

  nextStep(step) {
    if (step == 6) {
      this.props.actions.createExercise(Object.assign({}, this.props.exercise, {category: 0}))
      .then(() => {
          toastr.success('Exercise saved successfully');        
          this.redirect();
          this.props.actions.loadExercises();
        })
        .catch(() => {
          toastr.error('you have an error');
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

  // readyForForm() {
  //   if (this.state.ready) {
  //     const props = {
  //       update: this.updateNewExercise,
  //       continue: this.nextStep,
  //       step: this.props.step
  //     };
  //     console.log('retuning elelemt');
  //     return React.CreateElement(UnifiedForm, props);
  //   }
  // }

  updateNewExercise(event) {
    const field = event.target.name;
    const value = event.target.value;
    const exercise = this.props.exercise;

    this.props.actions.updateExercise(exercise, field,value);
  }

  render() {
    console.log(this.state.ready);
    return (
      <div>
        <ButtonGroup step={this.muscleGroupChosen}/>
        {this.state.ready && <UnifiedForm update={this.updateNewExercise} continue={this.nextStep} step={this.props.step} />}
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
