const Router = require('express').Router();
const { categorieController } = require('../controllers/categorieController');
const authMiddle = require('../controllers/authController');

Router.post('/', authMiddle, categorieController);

module.exports = Router;