'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Sale, {
        foreignKey: 'sales_id',
        targetKey: 'id',
        as: 'sale',
      });
      this.belongsTo(models.Barang, {
        foreignKey: 'barang_id',
        targetKey: 'id',
        as: 'barang',
      });
    }
  }
  SaleItem.init(
    {
      sales_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Sales id is required',
          },
          isInt: {
            args: true,
            msg: 'Sales id must be an integer',
          },
        },
        isExist(val) {
          return sequelize.models.Sale.findByPk(val).then((sale) => {
            if (!sale) {
              throw new Error('Sales does not exist');
            }
          });
        },
      },
      barang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Barang id is required',
          },
          isInt: {
            args: true,
            msg: 'Barang id must be an integer',
          },
        },
        isExist(val) {
          return sequelize.models.Barang.findByPk(val).then((barang) => {
            if (!barang) {
              throw new Error('Barang does not exist');
            }
          });
        },
      },
      harga_bandrol: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Harga bandrol is required',
          },
          isDecimal: {
            args: true,
            msg: 'Harga bandrol must be a decimal',
          },
        },
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Quantity is required',
          },
          isInt: {
            args: true,
            msg: 'Quantity must be an integer',
          },
        },
      },
      diskon_nilai: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Diskon nilai is required',
          },
          isDecimal: {
            args: true,
            msg: 'Diskon nilai must be a decimal',
          },
        },
      },
      harga_diskon: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Harga diskon is required',
          },
          isDecimal: {
            args: true,
            msg: 'Harga diskon must be a decimal',
          },
        },
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Total is required',
          },
          isDecimal: {
            args: true,
            msg: 'Total must be a decimal',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'SaleItem',
    }
  );
  return SaleItem;
};
