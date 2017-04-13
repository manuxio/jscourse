const myArray = [1,2,3,4,5,6,7];
const myCopyOfArray = myArray.map(function(element, position) {
  console.log('Considering element at position', position);
  return element + 1;
});

console.log('The copy is: ', myCopyOfArray.join(','));
