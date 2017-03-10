function showFullName(firstName, lastName) {
  var title = 'Mr.';
  function makeFullName() {
    return title + " " + firstName + " " + lastName;
  }
  return makeFullName();
}

var fullName = showFullName('Manuele', 'Cappelleri');
console.log(fullName);
