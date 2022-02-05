const { Categories } = require('../models');
const categorieSchemas = require('../schemas/categorieSchemas');
const { validateWithJoi } = require('../utils/errors');

const createCategorieService = async (reqBody) => {
  validateWithJoi(categorieSchemas, reqBody);
  const categorie = await Categories.create({ ...reqBody });
  console.log('CATEGORIE', categorie);
  if (categorie) {
    const { dataValues } = categorie;
    return dataValues;
  }
};

const findCategoriesService = async () => {
  const categories = await Categories.findAllRaw();
  console.log('CATEGORIES', categories);
  return categories;
};

module.exports = {
  createCategorieService,
  findCategoriesService,
};