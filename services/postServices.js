const { BlogPosts, Categories } = require('../models');
const postSchemas = require('../schemas/postSchemas');
const { validateWithJoi, throwError } = require('../utils/errors');

const createPostService = async (reqBody) => {
  validateWithJoi(postSchemas, reqBody);
  const allCategories = await Categories.findAllRaw();
  const { categoryIds: reqCategoryIds } = reqBody;
  console.log('reqCategoryIds', reqCategoryIds);
  // verifica se o id da requisição existe
  const existingIds = reqCategoryIds
    .filter((reqId) => allCategories.some((categorie) => categorie.id === reqId));
    console.log('existingIds', existingIds);
  if (
    existingIds.length !== reqCategoryIds.length
    ) return throwError(400, '"categoryIds" not found');
    console.log('PASSOU DO IF | REQBODY ==>', reqBody);
  const categorieCreated = await BlogPosts.create({ ...reqBody });
  console.log('CATEGORIECREATED', categorieCreated);
  return categorieCreated.dataValues;
};

const findAllPosts = async (posts) => {
  const promise = Promise.all(posts.map(async (post) => {
    const categories = await post.getCategories();
    const user = await post.getUser({ attributes: ['id', 'displayName', 'email', 'image'] });
    const Post = post.dataValues;
    delete Post.UserId;
    Post.published = new Date(`${Post.published} -0000`);
    Post.updated = new Date(`${Post.updated} -0000`);
    return {
      ...Post,
      user,
      categories: categories.map((category) => ({ id: category.id, name: category.name })),
  };
  }));
  //  categories: await post.getCategories(),
  const resolve = await promise;
  return resolve;
};

const listPostService = async () => {
  const posts = await BlogPosts.findAll();
  const response = await findAllPosts(posts);
  return response;
};

module.exports = {
  createPostService,
  listPostService,
};