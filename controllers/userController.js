const rescue = require('express-rescue');
const {
  createUserService,
} = require('../services/userService');

const createUser = rescue(async (req, res) => {
  const createdUser = await createUserService(req.body);
  res.status(201).json(createdUser);
});

module.exports = {
  createUser,
};