//Hoisting

getName();
console.log(a);

var a = 10;
function getName() {
  console.log("My name is Taman");
}

// const test = () => {
//   console.log("this is a test");
// };
