'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('m_customer', [
      {
        kode: 'C001',
        nama: 'Cust A',
        telp: '0812345678910',
      },
      {
        kode: 'C002',
        nama: 'Cust B',
        telp: '0812345678911',
      },
      {
        kode: 'C003',
        nama: 'Cust C',
        telp: '0812345678912',
      },
      {
        kode: 'C004',
        nama: 'Cust D',
        telp: '0812345678913',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('m_customer', null, {});
  },
};
