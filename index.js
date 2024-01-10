// console.log('Hello World!');

const express = require('express');
const app = express(); // express is initialized in this line.
const PORT = 4000;
app.get('/', (req, res) => {
  res.json({
    message: "hello world from / route",
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
