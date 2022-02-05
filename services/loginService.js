require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const { Users } = require('../models');
const loginSchemas = require('../schemas/loginSchemas');
const { validateWithJoi, throwError } = require('../utils/errors');

const loginService = async (reqBody) => {
  validateWithJoi(loginSchemas, { ...reqBody });
  const user = await Users.findOne({ where: { email: reqBody.email } });
  console.log('USER', user);
  if (user) {
    const { dataValues } = user;
    const token = jwt.sign(dataValues, JWT_SECRET, { algorithm: 'HS256', expiresIn: '7d' });
    return { token };
  }
  throwError(400, 'Invalid fields');
};

module.exports = {
  loginService,
};