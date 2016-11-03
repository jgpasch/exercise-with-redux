import appConfig from '../config/config';

export default class ExerciseApi {
  static getAllExercises(cb) {
    $.get(appConfig.appUrl + '/api/exercises', function(data) {
      cb(data);
    });
  }

  static createExercise(exercise, cb) {
    // console.log(exercise);
    $.ajax({
      type: 'POST',
      url: appConfig.appUrl + '/api/exercises',
      data: exercise,
      dataType: "json",
      success: function(data) {
        cb(data);
      }
    }); 
  }
}
