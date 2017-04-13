let base = '';
for (let i = 0; i < 10; i = i + 1) {
  if (Math.random() > .5) {
    base += 'X';
  }
}

console.log('Base is:', base);

const promiseChain = new Promise((resolve, reject) => {
  if (base.length > 0) {
    resolve(base.length)
  } else {
    reject(base.length);
  }
});

promiseChain
.then(
  (result) => {
    if (base.length > 1) {
      return Promise.resolve(base.length)
    } else {
      return Promise.reject(base.length);
    }
  },
  (e) => Promise.reject(e)
)
.then(
  (result) => {
    if (base.length > 2) {
      return Promise.resolve(base.length)
    } else {
      return Promise.reject(base.length);
    }
  },
  (e) => Promise.reject(e)
)
.then(
  (result) => {
    if (base.length > 3) {
      return Promise.resolve(base.length)
    } else {
      return Promise.reject(base.length);
    }
  },
  (e) => Promise.reject(e)
)
.then(
  (result) => {
    console.log("Good, base is longer than 3, it is ", result);
  },
  (e) => {
    console.log('No! Base is shorter than 4... it is ', e);
  }
);
