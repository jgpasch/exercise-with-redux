/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import { loadExercises, getUniqueDates } from './actions/exerciseActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import '../node_modules/toastr/build/toastr.min.css';
// import $ from '../node_modules/jquery/dist/jquery.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
/// import './jGravity.js';

/*eslint-disable no-console*/

injectTapEventPlugin();

const store = configureStore();
// store.dispatch(loadExercises());
console.log('loading unique dates');
store.dispatch(getUniqueDates());
console.log('done laoding unique dates');

const themeObject = getMuiTheme({
  fontFamily: 'Roboto, sans-serif'
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={themeObject}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider> 
    ,document.getElementById('app')
);

export default store;