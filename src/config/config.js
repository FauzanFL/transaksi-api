require('dotenv').config({ path: __dirname + '/../../.env' });
const mysql2 = require('mysql2');
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_DIALECT,
  DB_PROD_USERNAME,
  DB_PROD_PASSWORD,
  DB_PROD_HOST,
  DB_PROD_NAME,
  DB_PROD_DIALECT,
  DB_PROD_PORT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    dialectModule: mysql2,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    dialectModule: mysql2,
  },
  production: {
    username: DB_PROD_USERNAME,
    password: DB_PROD_PASSWORD,
    database: DB_PROD_NAME,
    host: DB_PROD_HOST,
    port: DB_PROD_PORT,
    dialect: DB_PROD_DIALECT,
    dialectModule: mysql2,
  },
};
