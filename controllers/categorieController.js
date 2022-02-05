const rescue = require('express-rescue');
const {
  createCategorieService,
  findCategoriesService,
} = require('../services/categorieService');

const createCategorie = rescue(async (req, res) => {
  const createdCategorie = await createCategorieService(req.body);
  res.status(201).json(createdCategorie);
});

const listCategories = rescue(async (_req, res) => {
  const listedCategories = await findCategoriesService();
  console.log('listedCategories', listedCategories);
  res.status(200).json(listedCategories);
});

module.exports = {
  createCategorie,
  listCategories,
};