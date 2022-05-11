module.exports = {
  up: async (queryInterface, Sequelize) => {
    const drummerPrices = [30, 40, 50, 60];
    const promises = [];
    for (let i = 1; i <= drummerPrices.length; i += 1) {
      const sqlQuery = queryInterface.upsert('drummers',
        { price_per_jig: drummerPrices[i - 1] },
        { price_per_jig: drummerPrices[i - 1] },
        {
          where: {
            id: i,
          },
        });
      promises.push(sqlQuery);
    }
    const drummerEquipment = [
      {
        id: 1,
        name: 'Tamorines',
        drummer_id: 1,
      },
      {
        id: 2,
        name: 'Xylophone',
        drummer_id: 2,
      },
      {
        id: 3,
        name: 'Snares',
        drummer_id: 3,
      },
      {
        id: 4,
        name: 'Triangle',
        drummer_id: 4,
      },
    ];
    promises.push(queryInterface.bulkInsert('equipments', drummerEquipment));
    await Promise.all(promises);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkUpdate('drummers',
    //   { price_per_jig: 0 },
    //   {});
    await queryInterface.bulkDelete('equipments', null, {});
  },
};
