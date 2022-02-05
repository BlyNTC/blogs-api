const Router = require('express').Router();
const { createCategorie, listCategories } = require('../controllers/categorieController');
const authMiddle = require('../controllers/authController');

Router.post('/', authMiddle, createCategorie);

Router.get('/', authMiddle, listCategories);

module.exports = Router;