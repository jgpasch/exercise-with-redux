import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../actions/exerciseActions';
import DateExerciseList from './DateExerciseList';

class DateExercisePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dates } = this.props;
    return (
      <DateExerciseList dates={dates}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    dates: state.dates
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exerciseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DateExercisePage);