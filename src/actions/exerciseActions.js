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

function getExercisesByDateSuccess(data) {
  return {
    type: types.GET_EXERCISES_BY_DATE_SUCCESS,
    datedExercises: data
  };
}

export function getExercisesByDate(date) {
  return function(dispatch) {
    return exercisesApi.getExercisesByDate(date, (data) => {
      dispatch(getExercisesByDateSuccess(data));
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
  return {
    type: types.NEXT_STEP_SUCCESS,
    step: step
  };
}

export function nextStep(step) {
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
  return { type:
    types.CREATE_EXERCISE_SUCCESS,
    exercise
  };
}

export function createExercise(exercise) {

  return function(dispatch) {
    return exercisesApi.createExercise(exercise).then(exercise => {
      dispatch(createExerciseSuccess(exercise));      
    });
  };
}

function updateExerciseSuccess(exercise, field, value) {
  if (!field && !value) {
    return {
      type: types.MUSCLE_GROUP_CHOSEN_SUCCESS,
      exercise: {}
    };
  }
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

function getUniqueDatesSuccess(data) {
  return {
    type: types.GET_UNIQUE_DATES_SUCCESS,
    dates: data
  };
}

export function getUniqueDates() {
  return function(dispatch) {
    return exercisesApi.getUniqueDates((data) => {
      dispatch(getUniqueDatesSuccess(data));
    }); 
  };
}
