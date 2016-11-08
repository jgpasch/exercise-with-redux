import { combineReducers } from 'redux';
import exercises from './exerciseReducer';
import step from './updateStepReducer';
import newExercise from './createExerciseReducer';
import DatesReducer from './DatesReducer';
import DatedExerciseReducer from './DatedExercisesReducer';

const rootReducer = combineReducers({
  exercises: exercises,
  step: step,
  newExercise: newExercise,
  dates: DatesReducer,
  datedExercises: DatedExerciseReducer
});

export default rootReducer;
