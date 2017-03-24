var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res) {
  res.send("Questa pagina non esiste, ma <a href=\"/json_users/list\">questa</a> si...");
});

router.get('/list', function(req, res) {
  var utenti = req.utenti;
  res.json(utenti);
});

router.get('/add/:newUser', function(req, res) {
  req.utenti.push(req.params.newUser);
  res.redirect('/');
});

module.exports = router;
