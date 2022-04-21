//what is callback function in javascript

setTimeout(() => {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

// Javascript is a synchromous an single threaded language.
//blocking the main thread.

// Event listener also uses callbacks

// document.getElementById("clickMe").addEventListener("click", () => {
//   console.log("button Clicked");
// });

// callbacks used in CLOSURE TOO
function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", () => {
    console.log("button Clicked", ++count);
  });
}
attachEventListeners();

// Garbage collection and remove event Listeners
