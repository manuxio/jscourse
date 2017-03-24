var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sim15G0d',
  database : 'test'
});
var app = express();

connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});

app.get("/",function(req,res){
  connection.query('SELECT 1+1 as result', function(err, rows, fields) {
    if (!err) {
      res.send('The solution is: ' + rows[0]['result']);
    } else {
      res.send('Ooops, got an error...');
    }
  });
});

server = app.listen(3000, function(err) {
  if (err) {
    console.log('An error occurred!');
  } else {
    console.log('Server listening on port 3000');
  }
});
