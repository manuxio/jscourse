var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var requests = 1;
var server;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function(req, res) {
  var html = '<html><body><form action="/" method="post">Numero:<input type="text" name="variable"><input type="submit"></form></body></html>';
  res.send(html);
});
app.post('/', function(req, res) {
  if (req.body && req.body.variable) {
    var html = '<html><body>E questo e\' il risultato! (' + req.body.variable + ')</body></html>';
  } else {
    var html = '<html><body>E questo e\' il risultato...vuoto!</body></html>';
  }
  res.send(html);
});

server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
