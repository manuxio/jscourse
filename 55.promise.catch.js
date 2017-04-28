Promise.resolve()
.then(
  () => Promise.resolve(true),
  (e) => Promise.reject(e)
)
.then(
  (result) => {
    throw new Error('errore!');
  },
  (e) => Promise.reject(e)
)
.catch(
  (e) => {
    console.log('Ok, no panic!');
    console.error(e);
  }
)
