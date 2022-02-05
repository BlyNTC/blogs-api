const rescue = require('express-rescue');
const {
  loginService,
} = require('../services/loginService');

const loginController = rescue(async (req, res) => {
  const login = await loginService(req.body);
  res.status(200).json(login);
});

module.exports = {
  loginController,
};