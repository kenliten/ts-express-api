import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

export const User = mongoose.model('User', UserSchema);