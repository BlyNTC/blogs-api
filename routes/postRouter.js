const Router = require('express').Router();
const { createPost, listPosts } = require('../controllers/postController');
const authMiddle = require('../controllers/authController');

Router.post('/', authMiddle, createPost);

Router.get('/', authMiddle, listPosts);

module.exports = Router;