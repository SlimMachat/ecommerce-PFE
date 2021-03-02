const express = require('express');
// const { check } = require('express-validator');
const check = require('express-validator/check').check;

const userController = require('../controllers/userController');
const auth = require('../middlewares/auth')

const router = express.Router();

// @route   GET api/v1/users
// @desc    GET LOGGED IN USER
// @access  PRIVATE
router.get('/', auth, userController.getUser);


// @route   POST api/v1/users/signup
// @desc    REGISTER USER
// @access  Public
router.post('/signup', [
  check('name', 'Please provide a name').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], userController.signup);


// @route   POST api/v1/users/login
// @desc    REGISTER USER
// @access  Public
router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please provide a valid password').exists()
], userController.login);

module.exports = router