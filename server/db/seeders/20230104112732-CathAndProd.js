/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cathegories', [{
      name: 'Электроника',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Одежда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Продукты',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Products', [{
      title: 'Iphone 11',
      about: 'Хороший телефон',
      price: 78000,
      cathegory_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Молоко',
      about: 'Свежее',
      price: 140,
      cathegory_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Футболка белая',
      about: 'Из хлопка',
      price: 1200,
      cathegory_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
