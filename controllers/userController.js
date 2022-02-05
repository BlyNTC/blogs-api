const rescue = require('express-rescue');
const {
  createUserService,
  listUserService,
} = require('../services/userService');

const createUser = rescue(async (req, res) => {
  const createdUser = await createUserService(req.body);
  res.status(201).json(createdUser);
});

const listUser = rescue(async (req, res) => {
  const createdUser = await listUserService();
  res.status(200).json(createdUser);
});

module.exports = {
  createUser,
  listUser,
};