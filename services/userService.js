require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const { Users } = require('../models');
const userSchemas = require('../schemas/userSchemas');
const { validateWithJoi, throwError } = require('../utils/errors');

const createUserService = async (reqBody) => {
  validateWithJoi(userSchemas, { ...reqBody });
  const validateDuplicateEmail = await Users.findOne({ where: { email: reqBody.email } });
  if (validateDuplicateEmail) return throwError(409, 'User already registered');
  const created = await Users.create({ ...reqBody });
  console.log('DATAVALUES', created.dataValues);
  const token = jwt.sign(created.dataValues, JWT_SECRET, { algorithm: 'HS256', expiresIn: '7d' });
  return { token };
};

const listUserService = async () => Users.findAll();

module.exports = {
  createUserService,
  listUserService,
};