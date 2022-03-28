let firstName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Steve");
    }, 4000);
  });
};

let lastName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hancock");
    }, 3000);
  });
};

let middleName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("W.");
    }, 7000);
  });
};

//Full name is printed
Promise.all([firstName(), lastName(), middleName()])
  .then((msg) => {
    console.log(msg[0] + " " + msg[2] + " " + msg[1]);
  })
  .catch((msg) => {
    console.log(msg);
  });

//Hancock printed
Promise.race([firstName(), lastName(), middleName()])
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
