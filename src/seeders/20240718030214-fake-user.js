'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('john1203', 10);
    await queryInterface.bulkInsert('Users', [
      {
        nama: 'John Doe',
        username: 'johndoe',
        password: hashedPassword,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
