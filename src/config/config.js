require('dotenv').config({ path: __dirname + '/../../.env' });
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_DIALECT,
  DB_PROD_USERNAME,
  DB_PROD_PASSWORD,
  DB_PROD_HOST,
  DB_PROD_NAME,
  DB_PROD_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  production: {
    username: DB_PROD_USERNAME,
    password: DB_PROD_PASSWORD,
    database: DB_PROD_NAME,
    host: DB_PROD_HOST,
    dialect: DB_PROD_DIALECT,
  },
};
