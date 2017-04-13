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

promiseMeARandomNumber
.then(
  (result) => {
    if (result < .3) {
      return Promise.resolve(result);
    } else {
      return Promise.reject(new Error('Lower than .5, but higher than .3'));
    }
  },
  (e) => Promise.reject(e)
)
.then(
  (result) => {
    console.log('Good, all tests passed', result);
  },
  (e) => {
    console.log('Oooopss!');
    console.error(e);
  }
);
