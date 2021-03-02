const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');
const User = require('../models/userModel');
const jwtSecret="secret";
// GET LOGGED IN USER //
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
}

// SIGN UP CONTROLLER //
exports.signup = async (req, res) => {

  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }

  const { name, email, password, password2 } = req.body;

  try {
    // 1) CHECK IF USER EXSITS
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errors: [{
          msg: 'User already exists'
        }]
      })
    }
    // 2) CHECK IF PASSWORDS MATCH
    if(password !== password2) {
      return res.status(401).json({
        errors:[{
          msg: 'Passwords must match'
        }]
      })
    }
  
    // 2) CREATE NEW INSTANCE OF USER
    user = new User({
      name, email, password, password2
    })
    // 3) ENCRYPT PASSWORD
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    // 4) RETURN JSON WEB TOKEN
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload, jwtSecret,
      // config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token })
      }
    )

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error')
  }
}

// LOGIN CONTROLLER //
exports.login = async (req, res) => {
  // 1) CHECK VALIDATION
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(401)
      .json({ errors: errors.array() });
  }
  // 2) CHECK IF USER EXISTS
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ errors: [{ msg: 'Incorrect email or password.' }] });
    }
    // 3) COMPARE INPUT PASSWORD & ENCRYPTED PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ errors: [{ msg: 'Incorrect email or password.' }] });
    }
    // 4) RETURN JSON WEB TOKEN
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token });
      }
    )
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error')
  }
}