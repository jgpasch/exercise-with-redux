import { combineReducers } from 'redux';
import exercises from './exerciseReducer';
import step from './updateStepReducer';
import newExercise from './createExerciseReducer';

const rootReducer = combineReducers({
  exercises: exercises,
  step: step,
  newExercise: newExercise
});

export default rootReducer;
