import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import mongoose from 'mongoose';
import bp from 'body-parser';
import config from '../webpack.config.dev';
import appConfig from '../src/config/config';
import router from './routes';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import User from '../tools/models/User';


/* eslint-disable no-console */

const port = appConfig.port;
const app = express();
const compiler = webpack(config);


const sessionConfig = {
  resave: false,
  saveUninitialized: false,
  secret: appConfig.secret,
  signed: true
};

// Static Image serving
app.use('/static', express.static(__dirname + '/images'));

// Webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// Body Parser
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json({type: '*/*'}));

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  console.log(id);
  User.findById(id._id, function(err, user){
      if(!err) {
        done(null, user);
      } else done(err, null);
  });
});

// passport.use(GoogleStrategy);






// Passport



// CORS
app.use(cors());



// Router setup
app.use(router);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


mongoose.connect(appConfig.mongoUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('mongoose connected');
});



app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://127.0.0.1:${port}`);
  }
});
