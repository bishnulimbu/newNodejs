module.exports = {
  username: 'root',
  host: 'localhost',
  db: 'okcurd',
  password: '',
  dialect: 'mysql',
  pool: {           //connection 
    max: 5,
    min: 0,
    idle: 10000,
    accurate: 30000,
  }
}
