module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('PostsCategories',
      [
        {
          postId: 1,
          categoryId: 1,
        },
        {
          postId: 2,
          categoryId: 2,
        },

      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('PostsCategories', null, {});
  },
};
