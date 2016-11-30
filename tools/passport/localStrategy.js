import passport from 'passport';
import User from '../models/User';
import config from '../../src/config/config';
import LocalStrategy from 'passport-local';

const localOptions = {
  usernameField: "email"
};

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Local login (username and password) strategy

  // search mongo for one user with given email address
  User.findOne({email: email}, (err, user) => {

    if (err) return done(err);

    // if there was no user with given email
    if (!user) {
      return done(null, false);
    }

    //user was found, compare passwords
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);

      if (!isMatch) {
        return done(null, false);
      }

      // match
      return done(null, user);
    });
  });
});

passport.use(localLogin);