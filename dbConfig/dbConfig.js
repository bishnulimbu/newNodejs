module.exports = {
  username: 'root',
  host: 'localhost',
  bd: 'okcrud',
  password: '',
  dialect: 'mysql',
  pool: {           //connection 
    max: 5,
    min: 0,
    idle: 10000,
    accurate: 30000,
  }
}
