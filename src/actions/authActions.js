import axios from 'axios';
import * as types from './actionTypes';
import config from '../config/config';
import { browserHistory } from 'react-router';

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(config.appUrl + '/signup', {email, password})
      .then(response => {
        // dispatch logged in user action
        dispatch({type: types.AUTH_USER });
        // save token to local storage
        localStorage.setItem('token', response.data.token);
        //redirect page.
        browserHistory.push('/exercises');        
      })
      .catch( error => {
        // dispatch error msg action
        dispatch(authError(error.response.data.error));
      });
  };
}

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