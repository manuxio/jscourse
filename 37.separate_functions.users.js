var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res) {
  res.send("Questa pagina non esiste, ma <a href=\"/users/list\">questa</a> si...");
});

router.get('/list', function(req, res) {
  var utenti = req.utenti;
  var html = 'Gli utenti sono:<ul>';
  for(var i = 0; i < utenti.length; i++) {
    html += '<li>' + utenti[i] + '</i>';
  }
  html += '</ul>';
  res.send(html);

});

router.get('/add/:newUser', function(req, res) {
  req.utenti.push(req.params.newUser);
  res.redirect('/');
});

module.exports = router;
