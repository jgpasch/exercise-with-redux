import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import { loadExercises, getUniqueDates } from './actions/exerciseActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import '../node_modules/toastr/build/toastr.min.css';
import $ from '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

/*eslint-disable no-console*/

const store = configureStore();
store.dispatch(loadExercises());
store.dispatch(getUniqueDates());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider> 
    ,document.getElementById('app')
);

export default store;