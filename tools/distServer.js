import express from 'express';
import path from 'path';
import open from 'open';
import mongoose from 'mongoose';
import bp from 'body-parser';
import appConfig from '../src/config/config';
import router from './routes';

/* eslint-disable no-console */

const port = appConfig.port;
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bp.json({type: '*/*'}));


app.use('/static', express.static(__dirname + '/images'));
app.use(express.static('dist'));

mongoose.connect(appConfig.mongoUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose connected');
});

app.use('/', router);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://127.0.0.1:${port}`);
  }
});
