import * as types from '../actions/actionTypes';

export default function DatedExerciseReducer(state = [], action) {
  switch (action.type) {
    case types.GET_EXERCISES_BY_DATE_SUCCESS:
      debugger;
      return action.datedExercises;
    default:
      return state;
  }
}