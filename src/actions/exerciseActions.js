import * as types from './actionTypes';
import exercisesApi from '../api/exerciseApi';

/*  
  **                     **
    LOAD EXERCISE actions
  **                     **
*/
export function loadExercisesSuccess(exercises) {
  return { type:
    types.LOAD_EXERCISES_SUCCESS,
    exercises: exercises
  };
}

export function loadExercises() {
  return function(dispatch) {
    return exercisesApi.getAllExercises((data) => {
      dispatch(loadExercisesSuccess(data));
    }); 

  };
}


/*  
  **                     **
    INIT STEP actions
  **                     **
*/
export function initStepSuccess() {
  return { 
    type: types.INIT_STEP_SUCCESS,
    step: 1
  };
}

export function initStep() {
  // debugger;
  return function(dispatch) {
    return dispatch(initStepSuccess());
  };
}


/*  
  **                     **
    NEXT STEP actions
  **                     **
*/
export function nextStepSuccess(step) {
  // console.log(typeof step);
  return {
    type: types.NEXT_STEP_SUCCESS,
    step: step
  };
}

export function nextStep(step) {
  // console.log(typeof step);
  return function(dispatch) {
    return dispatch(nextStepSuccess(step));
  };
}


/*  
  **                     **
    PREVIOUS STEP actions
  **                     **
*/
export function previousStepSuccess(step) {
  return { type:
    types.PREVIOUS_STEP_SUCCESS,
    step: step
  };
}

export function previousStep(step) {
  return function(dispatch) {
    return dispatch(previousStepSuccess(step));
  };
}



//CREATE EXERCISE 

export function createExerciseSuccess(exercise) {
  // debugger;
  // console.log(exercises);
  console.log('in create exercise succes');
  console.log('withi data' + exercise);
  return { type:
    types.CREATE_EXERCISE_SUCCESS,
    exercise
  };
}

export function createExercise(exercise) {
  // debugger;
  return function(dispatch) {
    return exercisesApi.createExercise(exercise, (exercise) => {
      // console.log(exercise);
      console.log(exercise);
      dispatch(createExerciseSuccess(exercise));
    }); 

  };
}

function updateExerciseSuccess(exercise, field, value) {
  return { 
    type: types.UPDATE_EXERCISE_SUCCESS,
    exercise: exercise,
    newField: { [field]: value}
  };
}

// update exercise
export function updateExercise(exercise, field, value) {
  return function(dispatch) {
    return dispatch(updateExerciseSuccess(exercise, field, value));
  };
}