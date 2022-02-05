const Router = require('express').Router();
const { createUser } = require('../controllers/userMiddle');

Router.post('/', createUser);

module.exports = Router;