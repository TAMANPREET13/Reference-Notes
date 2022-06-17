//Event Bubbling - Child to parent
//Stop propogation, Immediate Propogation & Prevent Default

var div = document.querySelector("div");
var button = document.querySelector("button");
var a = document.querySelector("a");

div.addEventListener("click", () => {
  console.log("div");
});

button.addEventListener("click", () => {
  console.log("button");
});

//Event Capturing - Parent to child

// div.addEventListener(
//   "click",
//   () => {
//     console.log("div");
//   },
//   true
// );

// button.addEventListener(
//   "click",
//   () => {
//     console.log("button");
//   },
//   true
// );

//Stop Propogation - To stop a event in the code we use this.

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button1");
});

//Immediate Propogation - If we have multiple event(3) on a single
// button and we dont want to run after event 2 then we use this.

button.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("button2");
});

//Prevent Default

a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Abh nhi jayega");
});
