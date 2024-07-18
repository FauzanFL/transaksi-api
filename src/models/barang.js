'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.SaleItem, {
        sourceKey: 'id',
        foreignKey: 'barang_id',
        as: 'sale_items',
      });
    }
  }
  Barang.init(
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
      harga: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Harga is required',
          },
          isDecimal: {
            args: true,
            msg: 'Harga must be a decimal',
          },
        },
      },
    },
    {
      sequelize,
      tableName: 'm_barang',
      modelName: 'Barang',
    }
  );
  return Barang;
};
