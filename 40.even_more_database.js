var express    = require("express");
var mysql      = require('mysql');
var escape = require("html-escape");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '**********',
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
    if (!err && rows && rows[0] && rows[0].result == 2) {
      res.send('Database is working fine.... <a href="/list">Show me available databases</a>');
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
      var html = '';
      html += '<table border="1">';
      html += '<thead><tr>';
      for (var y = 0; y < fields.length; y++) {
        html += '<th>' + fields[y] + '</th>';
      }
      html += '</tr></thead><tbody>';
      for (var i = 0; i < rows.length; i++) {
        html += '<tr>';
        for (var y = 0; y < fields.length; y++) {
          html += '<td><a href="/showtables/' + rows[i][fields[y]] + '">' + rows[i][fields[y]] + '</a></td>';
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

app.get("/showtables/:dbname",function(req,res){
  connection.query('SHOW TABLES IN ' +  req.params.dbname, function(err, rows, fields) {
    if (!err) {
      var fields = [];
      if (rows && rows[0]) {
        fields = Object.keys(rows[0]);
      }
      var html = '';
      html += '<table border="1">';
      html += '<thead><tr>';
      for (var y = 0; y < fields.length; y++) {
        html += '<th>' + fields[y] + '</th>';
      }
      html += '</tr></thead><tbody>';
      for (var i = 0; i < rows.length; i++) {
        html += '<tr>';
        for (var y = 0; y < fields.length; y++) {
          html += '<td><a href="/showdata/' + req.params.dbname + '/' + rows[i][fields[y]] + '">' + rows[i][fields[y]] + '</a></td>';
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

app.get("/showdata/:dbname/:tablename",function(req,res){
  connection.query('SELECT * FROM ' +  req.params.dbname + "." + req.params.tablename + ' LIMIT 100', function(err, rows, fields) {
    if (!err) {
      var fields = [];
      if (rows && rows[0]) {
        fields = Object.keys(rows[0]);
      }
      var html = '';
      if (rows && rows.length) {
        html += '<table border="1">';
        html += '<thead><tr>';
        for (var y = 0; y < fields.length; y++) {
          html += '<th>' + fields[y] + '</th>';
        }
        html += '</tr></thead><tbody>';
        for (var i = 0; i < rows.length; i++) {
          html += '<tr>';
          for (var y = 0; y < fields.length; y++) {
            html += '<td>' + escape(rows[i][fields[y]]) + '</td>';
          }
          html += '</tr>';
        }
        html += '</tbody></table>';
      } else {
        html = 'Sorry, no data';
      }
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
