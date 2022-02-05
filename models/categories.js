module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, { timestamps: false });

  Categories.findAllRaw = async () => {
    const categories = await Categories.findAll();
    return categories.map((categorie) => ({ ...categorie.dataValues }));
  };

  return Categories;
};