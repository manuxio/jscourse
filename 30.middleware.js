var express = require('express');
var app = express();
var requests = 1;
var server;
var counter = 0;
app.use(function(req, res, next) {
  req.counter = counter++;
  next();
});
app.get('/', function(req, res) {
  var html = "<html><body>Questa pagina &egrave; stata vista " + req.counter + " volte!</body></html>";
  res.send(html);
});
server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
