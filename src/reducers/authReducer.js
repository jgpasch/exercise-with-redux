import * as types from '../actions/actionTypes';

export default function(state={}, action) {
  switch(action.type) {
    case types.AUTH_USER:
      return Object.assign({}, { state: state, error: '', authenticated: true}); 
    case types.DEAUTH_USER:
      return Object.assign({}, { state: state, authenticated: false});
    case types.AUTH_ERROR:
      return Object.assign({}, {error: action.payload});
    default:
      return state;
  }
}