const jwt = require('jsonwebtoken');
const config = require('../../config');

function authentication(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    jwt.verify(token.replace('Bearer ', ''), config.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden - Invalid token' });
        }

        req.user = decoded;
        next();
    });
}

module.exports = authentication;
