const express = require('express');
const app = express(); // express is initialized in this line.
const PORT = 5000;
app.get('/about', (req, res) => {
  res.json({
    message: "hello world from /about route",
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const { testFn } = require('./controllers/testController');
app.get('/test', testFn);


const { test2Fn } = require('./controllers/test2');

app.get('/test2', test2Fn);

const { evenFn } = require('./controllers/even');

app.get('/even', evenFn);

// const {fucntion name} = require('./file location');
// app.get('file name containing function', file name);
const db = require('./model/index.js');
