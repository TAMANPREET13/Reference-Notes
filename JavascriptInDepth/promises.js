let a = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("done");
  }, 4000);
});
a.then(
  function (val) {
    console.log(val);
  },
  function (val) {
    console.log("rejected " + val);
  }
);
console.log("see this is async code");
