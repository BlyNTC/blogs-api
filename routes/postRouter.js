const Router = require('express').Router();
const { createPost } = require('../controllers/postController');
const authMiddle = require('../controllers/authController');

Router.post('/', authMiddle, createPost);

module.exports = Router;