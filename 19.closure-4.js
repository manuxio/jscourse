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
    },
    setLastName(newName) {
      datiPersona.lastName = newName;
    },
    setFirstName(newName) {
      datiPersona.firstName = newName;
    }
  }
}

var persona = creaPersona();

console.log(persona.getFirstName());
console.log(persona.getLastName());

persona.setFirstName('Luca');
persona.setLastName('Lupidi');

console.log(persona.getFirstName());
console.log(persona.getLastName());
