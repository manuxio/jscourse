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
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send('<pre>Ooops, qualcosa &egrave; andato storto:\n' + err.toString() + '</pre>');
});
server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
