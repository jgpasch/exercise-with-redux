import React, { Component, PropTypes} from 'react';
import DateExerciseRow from './DateExerciseRow';
import {browserHistory} from 'react-router';

// const DateExerciseList = ({dates}) => {

//   dates.reverse();
  
//   return (
//     <div>
//       {dates.map((date, i) => <DateExerciseRow key={i} date={date}/>)}
//     </div>
//   );
// };

class DateExerciseList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
       {this.props.dates.reverse().map((date, i) => <DateExerciseRow key={i} date={date}/>)}
     </div>
    );
  }
}

export default DateExerciseList;