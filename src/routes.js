import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ExercisePage from './components/exercises/ExercisePage';
import DateExercisePage from './components/exercises/DateExercisePage';
import CreateExerciseContainer from './components/exercises/create/CreateExerciseContainer';
import login from './components/auth/login';
import logout from './components/auth/logout';
import signup from './components/auth/signup';
import requireAuth from './components/auth/require_auth';
import Default from './components/common/default';
import OAuth from './components/auth/OAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DateExercisePage} />
    <Route path="/login" component={login} />
    <Route path="/exercises/:date" component={ExercisePage} />
    <Route path="/create" component={CreateExerciseContainer} />
    <Route path="/signout" component={logout} />
    <Route path="/signup" component={signup} />     
    <Route path="/oauth" component={OAuth} />         
  </Route>
);
