const rescue = require('express-rescue');
const {
  categorieService,
} = require('../services/categorieService');

const categorieController = rescue(async (req, res) => {
  const createCategorie = await categorieService(req.body);
  res.status(201).json(createCategorie);
});

module.exports = {
  categorieController,
};