const Router = require('express').Router();
const { createUser, listUser, listUserById } = require('../controllers/userController');
const authMiddle = require('../controllers/authController');

Router.post('/', createUser);
Router.get('/', authMiddle, listUser);
Router.get('/:id', authMiddle, listUserById);

module.exports = Router;