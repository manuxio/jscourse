const promiseMeARandomNumber = (cb) => {
  setTimeout(() => {
    const retval = Math.random(0,1);
    if (retval > .5) {
      cb(new Error('Number was too high!'));
    } else {
      cb(null, retval);
    }
  }, 1000);
};

promiseMeARandomNumber((error, myresult) => {
  if (error) {
    console.log('Oooopssss, there was an error!');
    console.error(error);
  } else {
    console.log('My Result is', myresult);
  }
});
