module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.belongsTo(models.BlogPosts, { as: 'blogPosts', foreingKey: 'userId' });
  };

  return User;
};