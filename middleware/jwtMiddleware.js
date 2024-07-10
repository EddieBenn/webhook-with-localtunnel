const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { JWT_SECRET } = process.env;

function verifyToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}

module.exports = verifyToken;
