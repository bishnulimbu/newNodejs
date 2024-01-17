module.exports = {
  username: 'root',
  host: 'localhost',
  db: 'CURD',
  password: '',
  dialect: 'mysql',
  pool: {           //connection 
    max: 5,
    min: 0,
    idle: 10000,
    accurate: 30000,
  }
}
