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
    // const dates = new Array(this.props.dates);
    console.log(this.props.dates);
    const { dates } = this.props;
    // console.log(typeof dates);
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