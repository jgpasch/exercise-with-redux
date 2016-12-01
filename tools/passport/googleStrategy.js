import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
const GS = passportGoogle.Strategy;

const GoogleStrategy = new GS({
  clientID: '257737179547-pdum396c5nr314rqpdlbf490f28qb73r.apps.googleusercontent.com',
  clientSecret: 'WHtpKrI2kWnxZ1W2yRQtYA-W',
  callbackURL: "http://localhost:8000/auth/google/callback"
}, function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  });

