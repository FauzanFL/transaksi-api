'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Sale, {
        sourceKey: 'id',
        foreignKey: 'cust_id',
        as: 'sales',
      });
    }
  }
  Customer.init(
    {
      kode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            args: true,
            msg: 'Kode is required',
          },
        },
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Nama is required',
          },
        },
      },
      telp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Telp is required',
          },
        },
      },
    },
    {
      sequelize,
      tableName: 'm_customer',
      modelName: 'Customer',
    }
  );
  return Customer;
};
