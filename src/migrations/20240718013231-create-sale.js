'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('t_sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kode: {
        type: Sequelize.STRING(12),
        unique: true,
        allowNull: false,
      },
      tgl: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cust_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'm_customer',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      subtotal: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      diskon: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      ongkir: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      total_bayar: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        ),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('t_sales');
  },
};
