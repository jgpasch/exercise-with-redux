import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../actions/exerciseActions';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getMonth(month) {
  return months[month];
}

class DateExerciseRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.date = this.props.date.props;
    this.monthString = getMonth(this.date.month);
  }

  handleClick() {
    const thisDate = new Date(this.date.year, this.date.month, this.date.date);
    // console.log(`sending date ${thisDate.toString()} to action`);
    this.props.actions.getExercisesByDate(thisDate).then(() => {
      console.log(`trying to get exercises for date ${thisDate.toString()}`);
      browserHistory.push('/exercises/' + thisDate);
    });
  }

  render() {
    return (
      <div className="row">
        <div onClick={this.handleClick} className={"date-row col-xs-6 col-md-6 col-lg-4 col-xs-offset-3 col-md-offset-3 col-lg-offset-4 well well-sm"}>
          <h2>{this.monthString} {this.date.date}</h2>
          <h5>{this.date.year}</h5>
        </div>
      </div>
    );
  }
}

// const DateExerciseRow = ({date}) => {
  // let currentClass = "";
  // switch (exercise.category) {
  //   case 0:
  //     currentClass = "exercise zero";
  //     break;
  //   case 1:
  //     currentClass = "exercise one";
  //     break;
  //   default:
  //     currentClass = "exercise two";
  // }
  // const thisMonth = getMonth(date);

//   return (
//     <div className="row">
//       <div className={"date-row col-xs-6 col-md-6 col-lg-4 col-xs-offset-3 col-md-offset-3 col-lg-offset-4 well well-sm"}>
//         <h2>{thisMonth} {date.props.date}</h2>
//         <h5>{date.props.year}</h5>
//       </div>
//     </div>
//   );
// };



// DateExerciseRow.propTypes = {
//   date: PropTypes.object.isRequired
// };



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exerciseActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(DateExerciseRow);