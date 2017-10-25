import Sequelize from'sequelize';
export const BDD_PORT = 9000;
export const BDD_HOST = 'localhost';
export const BDD_NAME = 'nodepro';
export const BDD_LOGIN = 'root';
export const BDD_PASSWORD = '';

export const DROP_TABLE_USER = false;
export const DROP_TABLE_DYNAMICS_ROUTER = false;
export const DROP_TABLE_TEMPLATE = false;
export const DROP_TABLE_LEVEL_USER = false;
export const DROP_TABLE_IMAGES = false;
export const DROP_TABLE_PRODUCT = false;
export const DROP_TABLE_CATEGORIES_PRODUCT = false;
export const DROP_TABLE_PRODUCT_CATEGORY = false;

export const sequelize = new Sequelize(BDD_NAME, BDD_LOGIN, BDD_PASSWORD, {
  host: BDD_HOST,
  dialect: 'mysql',//|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});
