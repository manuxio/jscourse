function showFullName(firstName) {
  var title = 'Mr.';
  function makeFullName(lastName) {
    return title + " " + firstName + " " + lastName;
  }
  return makeFullName;
}

var fullName = showFullName('Manuele');
console.log(fullName('Cappelleri'));
