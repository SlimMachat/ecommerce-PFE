const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an valid email address'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Plase provide a password'],
    minlength: 6
  },
  password2: {
    type: String,
    required: [true, 'Please confirm your password']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;