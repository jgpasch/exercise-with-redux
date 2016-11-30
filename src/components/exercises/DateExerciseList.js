import React, { Component, PropTypes} from 'react';
import DateExerciseRow from './DateExerciseRow';
import {browserHistory} from 'react-router';

class DateExerciseList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    this.myDates = [...this.props.dates];
    this.myDates = this.myDates.reverse();
    return (
      <div>
       {this.myDates.map((date, i) => <DateExerciseRow key={i} date={date}/>)}
     </div>
    );
  }
}

export default DateExerciseList;