//A callback is a function passed as an argument to another function.

//Promise
//A Promise is a JavaScript object that links producing code and consuming code
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

setTimeout(myFunction, 2000);

function myFunction() {
  document.body.innerText = "Learning callbacks";
}

let promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I am learning promises know");
  }, 3000);
});

promise.then(() => {
  document.body.innerText = "I am learning promises know";
});
