import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { api } from './api';

export const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(function(req, res, next) {
  console.info('Incoming %s request on %s', req.method, req.originalUrl);
  if (req.method == 'POST' || req.method == 'PUT') {
    console.info('Data: ', req.body);
  }
  next();
});

app.use('/api', api);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});