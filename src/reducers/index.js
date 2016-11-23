import { combineReducers } from 'redux';
import exercises from './exerciseReducer';
import step from './updateStepReducer';
import newExercise from './createExerciseReducer';
import DatesReducer from './DatesReducer';
import DatedExerciseReducer from './DatedExercisesReducer';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  exercises: exercises,
  step: step,
  newExercise: newExercise,
  dates: DatesReducer,
  datedExercises: DatedExerciseReducer,
  form: form,
  auth: authReducer
});

export default rootReducer;
