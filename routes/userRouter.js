const Router = require('express').Router();
const { createUser, listUser } = require('../controllers/userController');
const authMiddle = require('../middlewares/authMiddle');

Router.post('/', createUser);

Router.get('/', authMiddle, listUser);

module.exports = Router;