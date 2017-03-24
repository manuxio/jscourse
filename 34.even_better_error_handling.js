var express = require('express');
var app = express();
var requests = 1;
var server;
var counter = 0;
app.get('/', function(req, res, next) {
  counter++;
  if (counter % 2) {
    var html = "<html><body>Clicca pure <a href=\"" + Math.random(0,100) + ".html\">qui</a> se vuoi...</body></html>";
    res.send(html);
  } else {
    next(new Error('We don\' like odds!'));
  }
});
app.all("*", function(req, res, next) { next(404); });
app.use(function(err, req, res, next) {
    if (err == 404) {
      res.status(404);
      res.send('La pagina richiesta non &egrave; stata trovata!');
    } else {
      res.send(err.message);
      res.status(500);
    }
});
server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
