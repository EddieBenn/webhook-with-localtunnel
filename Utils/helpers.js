const jwt = require('jsonwebtoken');

//Generate a token
function generateAccessToken(method, url) {
    const JWT_SECRET = process.env.JWT_SECRET;
    return jwt.sign({ method, url }, JWT_SECRET, {
      expiresIn: '30d'
    })
};

module.exports = generateAccessToken;