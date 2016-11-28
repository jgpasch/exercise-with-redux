import axios from 'axios';
import * as types from './actionTypes';
import config from '../config/config';
import { browserHistory } from 'react-router';

export function loginUser({email, password}) {
  return function(dispatch) {
    axios.post(config.appUrl + '/signin', {email, password})
      .then(response => {
        // if req is good 
        dispatch({type: types.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/exercises');
      })
      .catch(() => {
        dispatch(authError('bad login credentials'));
      });
  };
  //submit email/password to server

  // if req is good, update state for auth user
  // save jwt token
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}

export function logoutUser() {
  localStorage.removeItem('token');
  return {
    type: types.DEAUTH_USER
  };
}