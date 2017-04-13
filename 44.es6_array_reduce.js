const myArray = [1,2,6,3,6,4,5,6,7];
const findFirstPositionOfSix = myArray.reduce(function(previous, current, position) {
  console.log('Considering element at position', position);
  if (current === 6) {
    return position;
  }
  return previous;
}, null);

console.log('The position of six is: ', findFirstPositionOfSix);
