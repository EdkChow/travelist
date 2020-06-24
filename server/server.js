const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const app = express();

app.use(express.json());
app.use(cookieParser());

const url = 'mongodb+srv://edkchow:hkHCOaA3hGgj0A5Y@cluster0-1bozk.mongodb.net/travelist?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  console.log(req.body.username, req.body.password);
  res.setHeader('Content-Type', 'application/json');
  // res.status(200).json({ signup: true });
  res.redirect('/destinations');
});

app.post('/login', userController.verifyUser, userController.getCountries, (req, res) => {
  console.log(req.body.username, req.body.password);
  res.locals.username = req.body.username;
  // console.log('res.locals.username: ', res.locals.username);
  res.setHeader('Content-Type', 'application/json');
  // res.status(200).json({ verify: true });
  // res.redirect('/destinations');
  res.status(200).json({ signup: true, verify: true, countries: res.locals.countries });
});

// app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
//   console.log(req.body.username, req.body.password);
//   res.locals.username = req.body.username;
//   // console.log('res.locals.username: ', res.locals.username);
//   res.setHeader('Content-Type', 'application/json');
//   // res.status(200).json({ verify: true });
//   res.redirect('/destinations');
// });

app.get('/destinations', sessionController.isLoggedIn, userController.getCountries, (req, res) => {
  // console.log('usrname: ', req.locals.username);
  res.status(200).json({ signup: true, verify: true, countries: res.locals.countries });
});

app.put('/add', userController.add, userController.getCountries, (req, res) => {
  res.status(200).json({ countries: res.locals.countries });
});

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});

app.listen(3000, console.log('listening on port 3000'));
