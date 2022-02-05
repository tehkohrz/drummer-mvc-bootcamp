
module.exports = {
  up: async (queryInterface) => {
    const drummersList = [
      {
        name: 'john',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'jimmy',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'jack',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'simon',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const drummers = await queryInterface.bulkInsert(
      'drummers',
      drummersList,
      { returning: true },
    );

    const reservations = [];
    for (let i = 0; i < drummers.length; i++) {
      reservations.push({
        drummer_id: drummers[i].id,
        booking_date: '2021-04-05',
        created_at: new Date(),
        updated_at: new Date(),
      });
      reservations.push({
        drummer_id: drummers[i].id,
        booking_date: '2021-04-16',
        created_at: new Date(),
        updated_at: new Date(),
      });
      reservations.push({
        drummer_id: drummers[i].id,
        booking_date: '2021-05-12',
        created_at: new Date(),
        updated_at: new Date(),
      });
      reservations.push({
        drummer_id: drummers[i].id,
        booking_date: '2021-05-15',
        created_at: new Date(),
        updated_at: new Date(),
      });

      queryInterface.bulkInsert('reservations', reservations);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('drummers', null, {});
    await queryInterface.bulkDelete('reservations', null, {});
  },
};
