import express from 'express';
import path from 'path';
import passport from 'passport';
import './passport/jwtStrategy';
import './passport/localStrategy';
import Exercise from '../tools/models/Exercise';
import _ from 'lodash';
import { signUpCtrl, signInCtrl } from './controllers/auth';

/* eslint-disable no-console */

const router = express.Router();

const requireSignIn = passport.authenticate('local', {session: false});

// passport.use(jwtLogin);
const requireJwtAuth = passport.authenticate('jwt', {session: false});

// POST a new user
router.post('/signup', signUpCtrl);

//POST login a user
router.post('/signin', requireSignIn, signInCtrl);

// POST an exercise
router.post('/api/exercises', requireJwtAuth, (req, res) => {
  let isError = false;
  
  if (Object.keys(req.body).length < 5) {
    isError = true;
  }

  if (isError) {
    res.sendStatus(400);
    return;
  }

  const newExercise = new Exercise({
    name: req.body.name,
    weight: req.body.weight,
    sets: req.body.sets,
    reps: req.body.reps,
    category: req.body.category,
    date: new Date(2016,10,4)
  });

  newExercise.save((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else
      res.sendStatus(200);
  });
});

// GET exercises
router.get('/api/exercises', requireJwtAuth, (req,res) => {
  Exercise.find({}, (err, results) => {
    if (err)
    res.send(results);
  });
});

// GET exercises by date
router.get('/api/exercises/:date', requireJwtAuth, (req, res) => {
  const dateObj = new Date(req.params.date);
  // debugger;
  let dateProps = {
    year: dateObj.getYear() + 1900,
    month: dateObj.getMonth(),
    date: dateObj.getDate()
  };
  Exercise.find({date: { $gte: new Date(dateProps.year, dateProps.month, dateProps.date), $lt: new Date(dateProps.year, dateProps.month, dateProps.date +1 )}}, (err, results) => {
    if (err)
      console.log('no results found for specified date');
    res.send(results);
  });
});

// GET all unique dates
router.get('/api/dates', requireJwtAuth, (req, res) => {
  Exercise.find({}, (err, results) => {
    let uniqDates = getUniqueDates(results);
    res.send(uniqDates);
  });
});

function getUniqueDates(data) {
  // init array which will hold all unique dates
  let uniqDates = [];
  
  // iterate through api response, and add all unique dates
  // to the uniqDates array
  for (let thisExercise of data) {
    // convert the string to a date obj
    const thisDate = new Date(thisExercise.date);

    // get date props of thisDate and see if that
    // date already exists 
    const thisExerciseDateProps = {
      month: thisDate.getMonth(),
      date: thisDate.getDate(),
      year: thisDate.getFullYear()
    };

    // if this date already exists then move on
    let dateAlreadyExists = false;
    for (let existingDate of uniqDates) {
      const oldDate = existingDate.props;
      if (_.isEqual(oldDate, thisExerciseDateProps)) {
        dateAlreadyExists = true;
      }
    }

    // if the date didn't already exist then add it

    if (!dateAlreadyExists) {
      uniqDates.push({ id: thisExercise.id,
                    props: thisExerciseDateProps});
      }
    }
  return uniqDates;
}

export default router;



