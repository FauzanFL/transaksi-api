'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('m_barang', [
      {
        kode: 'A001',
        nama: 'Barang A',
        harga: 200000.0,
      },
      {
        kode: 'A031',
        nama: 'Barang B',
        harga: 350000.0,
      },
      {
        kode: 'B401',
        nama: 'Barang C',
        harga: 125000.0,
      },
      {
        kode: 'B011',
        nama: 'Barang D',
        harga: 300000.0,
      },
      {
        kode: 'C201',
        nama: 'Barang E',
        harga: 300000.0,
      },
      {
        kode: 'C111',
        nama: 'Barang F',
        harga: 250000.0,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('m_barang', null, {});
  },
};
