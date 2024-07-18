'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Customer, {
        foreignKey: 'cust_id',
        targetKey: 'id',
        as: 'customer',
      });
      this.hasMany(models.SaleItem, {
        sourceKey: 'id',
        foreignKey: 'sales_id',
        as: 'items',
      });
    }
  }
  Sale.init(
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
      cust_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Customer id is required',
          },
          isInt: {
            args: true,
            msg: 'Customer id must be an integer',
          },
        },
        isExist(val) {
          return sequelize.models.Customer.findByPk(val).then((customer) => {
            if (!customer) {
              throw new Error('Customer does not exist');
            }
          });
        },
      },
      subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Sub total is required',
          },
          isDecimal: {
            args: true,
            msg: 'Sub total must be a decimal',
          },
        },
      },
      diskon: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Diskon is required',
          },
          isDecimal: {
            args: true,
            msg: 'Diskon must be a decimal',
          },
        },
      },
      ongkir: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Ongkir is required',
          },
          isDecimal: {
            args: true,
            msg: 'Ongkir must be a decimal',
          },
        },
      },
      total_bayar: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Total bayar is required',
          },
          isDecimal: {
            args: true,
            msg: 'Total bayar must be a decimal',
          },
        },
      },
    },
    {
      sequelize,
      tableName: 't_sales',
      modelName: 'Sale',
    }
  );
  return Sale;
};
