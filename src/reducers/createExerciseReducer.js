import * as types from '../actions/actionTypes';

export default function createExerciseReducer(state = [], action) {
  // console.log(action.exercise);
  // console.log(action.newField);
  switch(action.type) {
    case types.CREATE_EXERCISE_SUCCESS:
      return Object.assign({}, action.exercise, action.newField);
    case types.UPDATE_EXERCISE_SUCCESS:
      return Object.assign({}, action.exercise, action.newField);
    case types.MUSCLE_GROUP_CHOSEN_SUCCESS:
      return {};
    default:
      return state;
  }
}
