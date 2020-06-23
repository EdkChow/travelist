const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  console.log('***************' + req.body.username, req.body.password);
  res.status(200).json({ key: 'value', key2: 'value2' });
});

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000, console.log('listening on port 3000'));
