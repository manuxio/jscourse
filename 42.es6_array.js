const myArray = [1,2,3,4,5,6,7];
let sumOfIt = 0;
myArray.forEach(function(element) {
  sumOfIt += element;
});

console.log('The sum is: ', sumOfIt);
