require('dotenv').config();

const { Categories } = require('../models');
const categorieSchemas = require('../schemas/categorieSchemas');
const { validateWithJoi } = require('../utils/errors');

const categorieService = async (reqBody) => {
  validateWithJoi(categorieSchemas, reqBody);
  const categorie = await Categories.create({ ...reqBody });
  console.log('CATEGORIE', categorie);
  if (categorie) {
    const { dataValues } = categorie;
    return dataValues;
  }
};

module.exports = {
  categorieService,
};