const promiseMeARandomNumber = new Promise(function(success, failure) {
  setTimeout(() => {
    const retval = Math.random(0,1);
    if (retval > .5) {
      failure(new Error('Number was too high!'));
    } else {
      success(retval);
    }
  }, 1000);
});

promiseMeARandomNumber.then(
  (result) => {
    console.log("Got a result", result);
  },
  (e) => {
    console.log('Oooopss!');
    console.error(e);
  }
);
