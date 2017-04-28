const myObject = {
  pippo: 'pippo',
  pluto: 'pluto'
};

const {
  pippo: myPippo,
  pluto: myPluto
} = myObject;

console.log('pippo', myPippo);
console.log('pluto', myPluto);
