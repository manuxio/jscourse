var express = require('express');
var app = express();
var requests = 1;
var server;
app.get('/', function(req, res) {
  console.log('Got a request....');
  if (requests == 5) {
    res.send('Congratulations, this is the 5th page I create... now, time to sleep!')
    process.exit()
  } else {
    res.send('This is page n. ' + requests++);
  }
});
server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
