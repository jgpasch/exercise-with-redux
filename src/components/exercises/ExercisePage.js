import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../actions/exerciseActions';
import ExerciseList from './ExerciseList';

class ExercisePage extends Component {
  constructor(props, context) {
    super(props, context);
    // this.actions.
    // console.log(typeof this.props.params.date);
  }

  render() {
    const { datedExercises } = this.props;
    return (
      <div id="mainView">
        <ExerciseList exercises={datedExercises}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    datedExercises: state.datedExercises
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exerciseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);
