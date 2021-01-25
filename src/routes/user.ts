import express from 'express';
import { User } from '../models/user';

export const usersRoute = express.Router();

usersRoute.get('/', function(req, res) {
  User.find(function(err, result) {
    if (err) {
      res.json({success: false, error: err})
    } else {
      res.json(result);
    }
  });
});

usersRoute.get('/:id', function (req, res) {
  User.findById(req.params['id'], function (err: any, result: any) {
    if (err) {
      res.json({ success: false, error: err })
    } else {
      res.json(result);
    }
  });
});

usersRoute.post('/', function (req, res) {
  const user = new User(req.body);
  user.save(function (err, result) {
    if (err) {
      res.json({ success: false, error: err })
    } else {
      res.json(result);
    }
  });
});

usersRoute.put('/:id', function (req, res) {
  User.updateOne({_id: req.body.params['id']}, req.body, {}, function (err, result) {
    if (err) {
      res.json({ success: false, error: err });
    } else {
      res.json(result);
    }
  });
});

usersRoute.delete('/:id', function (req, res) {
  User.deleteOne({_id: req.params['id']}, {}, function(err) {
    res.json({success: false, error: err});
  });
});