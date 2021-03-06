import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  sets: Number,
  reps: Number,
  category: Number,
  date: {type: Date}
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);
export default Exercise;