import appConfig from '../config/config';

export default class ExerciseApi {
  static getAllExercises(cb) {
    $.get(appConfig.appUrl + '/api/exercises', function(data) {
      cb(data);
    });
  }

  static createExercise(exercise) {
    return $.ajax({
      type: 'POST',
      url: appConfig.appUrl + '/api/exercises',
      data: exercise
    }); 
  }

  static getUniqueDates(cb) {
    return $.get(appConfig.appUrl + '/api/dates', (data) => {
      cb(data);
    });
  }

  static getExercisesByDate(date, cb) {
    // console.log('date is inside api call: ' + date.toString());
    // console.log(typeof date);
    return $.get(appConfig.appUrl + '/api/exercises/' + date.toString(), (data) => {
      cb(data);
    });
  }
}
