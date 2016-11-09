import * as types from '../actions/actionTypes';

export default function DatesReducer(state = [], action) {
  switch(action.type) {
    case types.GET_UNIQUE_DATES_SUCCESS:
      console.log('action.dates is');
      console.log(action.dates);
      return action.dates;
    default:
      return state;
  }
}
