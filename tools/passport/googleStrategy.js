import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import User from '../models/User';


const GS = passportGoogle.Strategy;

const GoogleStrategy = new GS({
  clientID: '257737179547-pdum396c5nr314rqpdlbf490f28qb73r.apps.googleusercontent.com',
  clientSecret: 'WHtpKrI2kWnxZ1W2yRQtYA-W',
  callbackURL: "http://127.0.0.1:8000/auth/google/callback",
  passReqToCallback : true

}, function(req, accessToken, refreshToken, profile, done) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
      // console.log(accessToken);
      // req['myAccessToken'] = accessToken;
      console.log('i am running now');
      User.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) return done(err, false);

        if (user) { 
          // user.accessToken = accessToken;
          return done(null, user);
        } else {
          const newUser = new User({
            oauthID: profile.id,
            email: profile.id + '@',
            password: profile.id + 'password'
          });
          newUser.save(function(err) {
            if (err) console.log('error saving user');
            console.log('saving new user now -- google');
            done(null, newUser);
          });
        }

        
      });
  });

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(id, done) {
//   console.log(id);
//   User.findById(id._id, function(err, user){
//       if(!err) {
//         done(null, user);
//       } else done(err, null);
//   });
// });

passport.use(GoogleStrategy);

