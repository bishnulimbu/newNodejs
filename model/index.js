// const dbConfig = require('../dbConfig/dbConfig.js');
// const { Sequelize } = require('sequelize');
// const sequelize = new sequelize{
// dbConfig.db,
// dbConfig.username,
// dbConfig.password,
//   {
//  host: bdConfig.host,
// dialect: dbConfig.dialect;
//   pool: {
//   max: dbConfig.pool.max,
//   min: dbConfig.pool.min,
//   accurate: dbConfig.pool.accurate,
//   idle: dbConfig.pool.idle,
// },
// }
// };

const dbConfig = require('../dbConfig/dbConfig.js');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.db,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.accurate, // Change 'accurate' to 'acquire'
      idle: dbConfig.pool.idle,
    },
  }
);
