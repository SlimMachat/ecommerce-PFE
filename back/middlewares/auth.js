const jwt = require('jsonwebtoken');
const config = require('config');

// PROTECT ROUTES
module.exports = function (req, res, next) {
  // 1) GET TOKEN FROM HEADER
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  // 2) CHECK IF NO TOKEN
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token. Authorization denied.' });
  }
  // 3) VERIFY TOKEN
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();

  } catch (err) {
    res.status(401).json({msg: 'Token is invalid.'});
  }
}
