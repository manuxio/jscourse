var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '********',
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

app.get("/list",function(req,res){
  connection.query('SHOW DATABASES', function(err, rows, fields) {
    if (!err) {
      var fields = [];
      if (rows && rows[0]) {
        fields = Object.keys(rows[0]);
      }
      var html = 'There are ' + rows.length + ' results...<br/>';
      html += '<table border="1">';
      html += '<thead><tr>';
      for (var y = 0; y < fields.length; y++) {
        html += '<th>' + fields[y] + '</th>';
      }
      html += '</tr></thead><tbody>';
      for (var i = 0; i < rows.length; i++) {
        html += '<tr>';
        for (var y = 0; y < fields.length; y++) {
          html += '<td>' + rows[i][fields[y]] + '</td>';
        }
        html += '</tr>';
      }
      html += '</tbody></table>';
      res.send(html);
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
