module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { as: 'user', foreingKey: 'userId' });
  };
  return BlogPosts;
};