var x = 10;
var y = 20;
function printout() {
  return x + y;
}
setTimeout(function() {
  console.log(printout());
}, 5000);
x = 20;
