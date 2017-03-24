var express = require('express');
var app = express();
var requests = 1;
var server;
var counter = 0;
app.get('/', function(req, res) {
  var html = "<html><body>Clicca pure <a href=\"" + Math.random(0,100) + ".html\">qui</a> se vuoi...</body></html>";
  res.send(html);
});
app.all("*", function(req, res) {
  res.status(404).send('La pagina richiesta non esiste!');
});
server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
