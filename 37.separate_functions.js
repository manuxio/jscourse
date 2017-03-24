var express = require('express');
var parseurl = require('parseurl');
var app = express();
var server;
var utenti = ['Matthew', 'Mark', 'Luke', 'John'];

var users = require('./37.separate_functions.users.js');
var json_users = require('./37.separate_functions.jsonusers.js');
app.use(function(req, res, next) {
  req.utenti = utenti;
  next();
});
app.use('/users', users);
app.use('/json_users', json_users);
app.all("*", function(req, res) {
  res.send('Clicca <a href="users">qui</a> oppure ... <a href="json_users">qui</a>');
});

server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
