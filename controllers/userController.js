const rescue = require('express-rescue');
const {
  createUserService,
  listUserService,
  listUserByIdService,
} = require('../services/userService');

const createUser = rescue(async (req, res) => {
  const createdUser = await createUserService(req.body);
  res.status(201).json(createdUser);
});

const listUser = rescue(async (req, res) => {
  const foundedUsers = await listUserService();
  res.status(200).json(foundedUsers);
});

const listUserById = rescue(async (req, res) => {
  const foundedUser = await listUserByIdService(req.params.id);
  res.status(200).json(foundedUser);
});

module.exports = {
  createUser,
  listUser,
  listUserById,
};