import * as types from '../actions/actionTypes';

export default function updateStepReducer(state = 1, action) {
  // console.log(store.getState());
  switch(action.type) {
    case types.INIT_STEP_SUCCESS:
      return 1;
    case types.NEXT_STEP_SUCCESS:
      return action.step + 1;
    case types.PREVIOUS_STEP_SUCCESS:
      return action.step - 1;
    default:
      return state;
  }
}
