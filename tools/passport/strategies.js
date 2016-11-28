import passport from 'passport';
import User from '../models/User';
import config from '../../src/config/config';
import LocalStrategy from 'passport-local';
import passportJwt from 'passport-jwt';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

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

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(localLogin);
passport.use(jwtLogin);