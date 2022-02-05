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

module.exports = {
  createPostService,
};