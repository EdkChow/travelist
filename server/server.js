const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json());

const url = 'mongodb+srv://edkchow:hkHCOaA3hGgj0A5Y@cluster0-1bozk.mongodb.net/travelist?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/signup', userController.createUser, (req, res) => {
  console.log(req.body.username, req.body.password);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ verify: true });
});

app.post('/login', userController.verifyUser, (req, res) => {
  console.log(req.body.username, req.body.password);
  res.status(200).json({ signup: true });
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
