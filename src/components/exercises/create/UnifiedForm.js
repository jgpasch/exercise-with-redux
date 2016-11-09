import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../../actions/exerciseActions';
import MyButton from './MyButton';
import MySubmitButton from './MySubmitButton';
import TextInput from '../../common/TextInput';
import ButtonGroup from './ButtonGroup';


class MultiStepForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      step: this.props.step,
      saving: false
    };
    this.update = this.update.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.submitExercise = this.submitExercise.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // Get the components DOM node
    const elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(() => {
      // Now set a transition on the opacity
      elem.style.transition = "opacity 1000ms";
      // and set the opacity to 1
      elem.style.opacity = 1;
    });
  }

  update(event) {
    this.props.update(event);
  }

  nextStep() {
    this.props.continue(this.props.step);
  }

  submitExercise() {    
    this.setState({
      saving: true
    });

    this.props.continue(this.props.step);
  }

  

  render() {
    return (
      <form className="col-xs-6 col-xs-offset-3" id="unifiedForm">
        <div className="form-group">
          <TextInput name="name" onChange={this.update} placeholder="name" />
        </div>

        <div className="form-group">
          <TextInput name="weight" onChange={this.update} placeholder="weight" />
        </div>

        <div className="form-group">
          <TextInput name="sets" onChange={this.update} placeholder="sets" />
        </div>

        <div className="form-group">
          <TextInput name="reps" onChange={this.update} placeholder="reps" />
        </div>
      </form>
    )
  }

  // render() {
  //   switch(this.props.step) {
  //     case 1:
  //       return (<div>
  //                <MyButton step={this.nextStep} value="continue" />
  //                <TextInput name="name" onChange={this.update} placeholder="name" />
  //              </div>);
  //     case 2:
  //       return (<div> <MyButton step={this.nextStep} value="continue" />
  //                <TextInput name="weight" onChange={this.update} placeholder="weight" />
  //              </div>);
  //     case 3:
  //       return (<div> <MyButton step={this.nextStep} value="continue" />
  //                <TextInput  name="sets" onChange={this.update} placeholder="sets" />
  //              </div>);
  //     case 4:
  //       return (<div> <MyButton step={this.nextStep} value="continue" />
  //                <TextInput  name="reps" onChange={this.update} placeholder="reps" />
  //              </div>);
  //     default:
  //       return (<div> <MySubmitButton isSaving={this.state.saving} step={this.submitExercise} value="submit" />
  //              </div>);
  //   }
  // }
}

MultiStepForm.propTypes = {
  step: PropTypes.number.isRequired
};

export default MultiStepForm;
