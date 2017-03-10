var express = require('express');
var server = express();
server.get('/', function(req, res) {
  console.log('Got a request....');
  var result = 'Hello world!';
  res.send(result);
});
server.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
