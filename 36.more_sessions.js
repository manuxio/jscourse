var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var server;

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/ricordami', function (req, res, next) {
  if (req.query && req.query.name) {
    req.session.name = req.query.name;
  }
  res.redirect('/');
});

app.get('/', function (req, res, next) {
  if (req.session.name) {
    res.send('Ciao ' + req.session.name + '!<br>Vuoi cambiare nome?<form action="/ricordami"><input type="text" name="name"></form>')
  } else {
    res.send('Come ti chiami?<form action="/ricordami"><input type="text" name="name"></form>')
  }
});

server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
