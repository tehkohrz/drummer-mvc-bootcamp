module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('drummers', 'price_per_jig', {
      type: Sequelize.FLOAT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('drummers', 'price_per_jig');
  },
};
