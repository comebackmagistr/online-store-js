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
      photo: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/156/317/892/072/017/31/100032952222b0.jpg',
      cathegory_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Молоко',
      about: 'Свежее',
      price: 140,
      photo: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/213/424/174/581/517/4/100026605704b0.jpg',
      cathegory_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Футболка белая',
      about: 'Из хлопка',
      price: 1200,
      photo: 'https://img.championat.com/s/735x490/news/big/v/c/kak-vybrat-beluyu-futbolku_1655831996353008314.jpg',
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
