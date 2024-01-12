const dbConfig = require('../dbConfig/dbConfig.js');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.db,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {

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

db.blogs = require("./../model/blog.js")(sequelize, Sequelize);
module.exports = db;
