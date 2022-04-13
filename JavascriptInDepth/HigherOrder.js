function doubleMe(x) {
  return x * 2;
}

let answer = document.write(doubleMe(20), "<br>");
// console.log(answer);

//In javascript we can not only return functions just like variables but also
// assign a function to a variable

//eg

function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);
let quadriple = createMultiplier(4);

document.write(quadriple(5), "<br>");

const sayHello = function () {
  return function () {
    console.log("Hello!");
  };
};
const myFunc = sayHello();
myFunc();
// Hello!

//FOR EACH
let myColors = ["red", "orange", "green", "blue"];

myColors.forEach(saySomething);

function saySomething(color) {
  document.write("The color " + color + " is a great color. <br>");
}
