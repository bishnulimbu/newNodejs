// console.log('Hello World!');


const express = require('express');
const { testFn } = require('./controllers/testController');
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
app.get('/test', testFn);


const { test2Fn } = require('./controllers/test2');

app.get('/test2', test2Fn);
