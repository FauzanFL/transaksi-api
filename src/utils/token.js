const jwt = require('jsonwebtoken');
require('dotenv').config({ path: __dirname + '/../../.env' });

function generateAccessToken(username) {
  return jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: '3h',
  });
}

module.exports = generateAccessToken;
