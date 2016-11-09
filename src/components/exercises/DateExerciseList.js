import React, { Component, PropTypes} from 'react';
import DateExerciseRow from './DateExerciseRow';
import {browserHistory} from 'react-router';

class DateExerciseList extends Component {
  constructor(props, context) {
    super(props, context);
    // this.myDates = [...this.props.dates];
    // console.log('myDates are');
    // console.log(this.myDates);
    // console.log('this.props.dates is');
    // console.log(this.props.dates);
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

// const DateExerciseList = ({dates}) => {
//   const theseDates = dates.reverse();
//   console.log(dates);
//   console.log(theseDates);
//   return (
//     <div>
//       {theseDates.map((date,i) => <DateExerciseRow key={i} date={date}/>)}
//     </div>
//   );
// };

export default DateExerciseList;