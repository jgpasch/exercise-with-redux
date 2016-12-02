import appConfig from '../config/config';
import {browserHistory} from 'react-router';

export default class ExerciseApi {
  static getAllExercises(cb) {

    return $.ajax({
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      url: appConfig.appUrl + '/api/exercises',
      success: function(data) {
        cb(data);
      }
    });
  }

  static createExercise(exercise) {
    return $.ajax({
      type: 'POST',
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      url: appConfig.appUrl + '/api/exercises',
      data: exercise
    }); 
  }

  static getUniqueDates(cb) {
    console.log('making api call to /api/dates');
    return $.ajax({
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      url: appConfig.appUrl + '/api/dates',
      success: function(data) {
        if (data.path) {
          browserHistory.push('/oauth');
        }
        console.log('this is where it runs ***');
        cb(data);
      }
    });
  }

  static getExercisesByDate(date, cb) {
    return $.ajax({
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      url: appConfig.appUrl + '/api/exercises/' + date.toString(),
      success: function(data) {
        cb(data);
      }
    });
  }
}
