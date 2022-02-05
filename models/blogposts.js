module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { as: 'user', foreingKey: 'userId' });
  };
  
  return BlogPosts;
};