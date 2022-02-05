require('dotenv').config();

const { JWT_SECRET } = process.env;
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');

module.exports = rescue((req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
    jwt.verify(authorization, JWT_SECRET);
    next();
});