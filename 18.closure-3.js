function creaPersona() {
  var datiPersona = {
    firstName: 'Manuele',
    lastName: 'Cappelleri'
  };
  return {
    getFirstName() {
      return datiPersona.firstName;
    },
    getLastName() {
      return datiPersona.lastName;
    }
  }
}

var persona = creaPersona();

console.log(persona.getFirstName());
console.log(persona.getLastName());
