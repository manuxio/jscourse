var express = require('express');
var app = express();
var requests = 1;
var server;
app.get('/', function(req, res) {
  var html = '<html><body><form action="/" method="post">Numero:<input type="text" name="variabile"><input type="submit"></form></body></html>';
  res.send(html);
});
app.post('/', function(req, res) {
  var html = '<html><body>E questo e\' il risultato!</body></html>';
  res.send(html);
});
server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
