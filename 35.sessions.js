var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');

var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(function (req, res, next) {
  var views = req.session.views;

  if (!views) {
    views = req.session.views = {};
  }

  // get the url pathname
  var pathname = parseurl(req).pathname;

  // count the views
  views[pathname] = (views[pathname] || 0) + 1;

  next();
});

app.get('/', function (req, res, next) {
  res.send('Clicca su <a href="/foo">Foo</a> oppure su <a href="/bar">Bar</a>');
});

app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times<br>' + 'Clicca su <a href="/foo">Foo</a> oppure su <a href="/bar">Bar</a>');
});

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times<br>' + 'Clicca su <a href="/foo">Foo</a> oppure su <a href="/bar">Bar</a>');
});

server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
