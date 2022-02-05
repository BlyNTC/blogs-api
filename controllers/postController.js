const rescue = require('express-rescue');
const {
  createPostService,
} = require('../services/postServices');

const createPost = rescue(async (req, res) => {
  const login = await createPostService(req.body);
  res.status(201).json(login);
});

module.exports = {
  createPost,
};