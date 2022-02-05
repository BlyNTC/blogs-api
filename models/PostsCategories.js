// const associate = (models) => {
//   models.Categories.belongsToMany(models.BlogPosts, { 
//     as: 'blogPosts',
//     through: models.PostsCategories,
//     foreingKey: 'categoryId',
//     otherKey: 'postId',
//   });
//   models.BlogPosts.belongsToMany(models.Categories, { 
//     as: 'categories',
//     through: models.BlogPosts,
//     foreingKey: 'postId',
//     otherKey: 'categoryId',
//   }, { timestamps: false });
// };

module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {});

  // PostsCategories.associate = associate;

  return PostsCategories;
};