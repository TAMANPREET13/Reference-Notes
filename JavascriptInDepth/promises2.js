let setTimeoutP = function (time) {
  return new Promise((res, rej) => {
    if (isNaN(time)) {
      rej("A number is required");
    }
    setTimeout(res, time);
  });
};

setTimeoutP("word")
  .then(function () {
    console.log("Done");
  })
  .catch(function (err) {
    console.error(err);
  });
