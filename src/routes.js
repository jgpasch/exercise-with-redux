import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ExercisePage from './components/exercises/ExercisePage';
import DateExercisePage from './components/exercises/DateExercisePage';
import CreateForm from './components/exercises/create/NewForm';
import login from './components/auth/login';
import logout from './components/auth/logout';
import signup from './components/auth/signup';
import requireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={login} />
    <Route path="/exercises" component={requireAuth(DateExercisePage)} />
    <Route path="/exercises/:date" component={requireAuth(ExercisePage)} />
    <Route path="/create" component={requireAuth(CreateForm)} />
    <Route path="/signout" component={logout} />
    <Route path="/signup" component={signup} />
  </Route>
);
