const rescue = require('express-rescue');
const {
  createPostService,
  listPostService,
} = require('../services/postServices');

const createPost = rescue(async (req, res) => {
  const login = await createPostService(req.body);
  res.status(201).json(login);
});

const listPosts = rescue(async (_req, res) => {
  const posts = await listPostService();
  res.status(200).json(posts);
});

module.exports = {
  createPost,
  listPosts,
};