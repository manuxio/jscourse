var express = require('express');
var app = express();
var requests = 1;
var server;
app.get('/', function(req, res) {
  var html = '<html><body><a href="/value">Clicca qui</a></body></html>';
  res.send(html);
});
app.get('/:something', function(req, res) {
  var html = '<html><body>Hai detto: ' + req.params['something'] + '</body></html>';
  res.send(html);
});
server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
