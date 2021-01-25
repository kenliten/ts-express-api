import express from 'express';
import mongoose from 'mongoose';
import { usersRoute } from './routes/user';

export const api = express();

mongoose.connect('mongodb://localhost:27017/test', {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(error => {
  console.warn('An error occurred', error);
});

mongoose.connection.on('error', err => {
  console.warn('An error occurred: ', err);
});

mongoose.connection.once('open', function () {
  console.info('Database connection established!');
});

api.use('/users', usersRoute);