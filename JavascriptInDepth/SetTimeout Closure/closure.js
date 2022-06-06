// Closure- Function bundled with its lexical envirnoment forms a closure.
// => Closures are basically function with its scope....

// Uses of closures:-
//  - Module Design Pattern
//  - Currying
//  - Functions like once
//  - memoize
//  - Maintaining state in async world
//  - setTimeouts
//  - Iterators
//  - and many more

const myName = "tamanpreet";

function printName() {
  console.log(myName);
}

printName();

// the above is an example of closure where we can excess the global variable inside
// a  function.

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// Corner cases for Interview

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// //...........
// z();

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);
// //...........
// z();

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
