import React, {PropTypes} from 'react';
import ExerciseRow from './ExerciseRow';
import MaterialExerciseRow from './MaterialExerciseRow';

const ExerciseList = ({exercises}) => {
  
  return (
    <div>
      {exercises.map((exercise, i) => <MaterialExerciseRow key={i} exercise={exercise}/>)}
    </div>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired
};

export default ExerciseList;