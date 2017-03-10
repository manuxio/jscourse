function creaPersone(dati) {
  var i;
  var pos = 0;
  for (i = 0; i < dati.length; i++) {
    dati[i].position = i;
    dati[i].getPosition = function() {
      return 'Position is ' + i;
    };
  }
  return dati;
}

var datiManuele = {
  firstName: 'Manuele',
  lastName: 'Cappelleri'
};

var datiLuca = {
  firstName: 'Luca',
  lastName: 'Lupidi'
};

var datiManueleELuca = [datiManuele, datiLuca];

var persone = creaPersone(datiManueleELuca);
console.log('persone is now an array');
console.log('There are ' + persone.length + ' elements in the array');
var manuele = persone[0];
var luca = persone[1];
console.log('manuele is (and object) the first element of the array');
console.log('luca is (and object) the second element of the array');
console.log('manuele\'s firstName is', manuele.firstName);
console.log('luca\'s firstName is', luca.firstName);
console.log('manuele\'s position is', manuele.position);
console.log('luca\'s position is', luca.position);
console.log('manuele\'s position by function', manuele.getPosition());
console.log('luca\'s position by function', luca.getPosition());
