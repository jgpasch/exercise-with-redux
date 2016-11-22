import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const MaterialExerciseRow = ({exercise}) => {
  let currentClass = "";
  switch (exercise.category) {
    case 0:
      currentClass = "exercise zero";
      break;
    case 1:
      currentClass = "exercise one";
      break;
    default:
      currentClass = "exercise two";
  }
  return (
    <div className="row">
      <Card className={currentClass + " col-xs-6 col-md-6 col-lg-4 col-xs-offset-3 col-md-offset-3 col-lg-offset-4 well well-sm"}>
        <CardHeader>{exercise.name}</CardHeader>
        <CardText><p>{exercise.weight}></p><p>{exercise.sets} sets of {exercise.reps}</p></CardText>
      </Card>
    </div>
  );
};

// MaterialExerciseRow.propTypes = {
//   exercise: PropTypes.object.isRequired
// };

export default MaterialExerciseRow;