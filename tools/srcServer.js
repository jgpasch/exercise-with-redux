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


/* eslint-disable no-console */

const port = appConfig.port;
const app = express();
const compiler = webpack(config);


// Webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// Body Parser
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json({type: '*/*'}));


// Passport
app.use(passport.initialize());

// CORS
app.use(cors());

// Static Image serving
app.use('/static', express.static(__dirname + '/images'));

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
