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
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to datebase successfully");
  })
  .catch((err) => {
    console.log(err);

  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

db.blog = require("./blog.js")(
  sequelize, Sequelize
)
// const dbconfig = require("../dbconfig/dbconfig.js");
// const sequelize = require("sequelize");
//
// const sequelize = new sequelize(
//   dbconfig.db,
//   dbconfig.username,
//   dbconfig.password,
//   {
//     host: dbconfig.host,
//     dialect: dbconfig.dialect,
//     pool: {
//       max: dbconfig.pool.max,
//       min: dbconfig.pool.min,
//       accurate: dbconfig.pool.accurate,
//       idle: dbconfig.pool.idle,
//     },
