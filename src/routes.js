import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ExercisePage from './components/exercises/ExercisePage';
import DateExercisePage from './components/exercises/DateExercisePage';
import CreateExerciseContainer from './components/exercises/create/CreateExerciseContainer';
import login from './components/auth/login';
import logout from './components/auth/logout';
import signup from './components/auth/signup';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={login} />
    <Route path="/exercises" component={DateExercisePage} />
    <Route path="/exercises/:date" component={ExercisePage} />
    <Route path="/create" component={CreateExerciseContainer} />
    <Route path="/signout" component={logout} />
    <Route path="/signup" component={signup} />  
  </Route>
);
