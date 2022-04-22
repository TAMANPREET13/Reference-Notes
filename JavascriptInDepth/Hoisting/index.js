//HOISTING

getName();
console.log(x);
console.log(getName);

// var x = 7;

// function getName() {
//   console.log("Learning Hoisting");
// }

// the below arrow func will give error because javascript will treat it as
// another variable
const getName = () => {
  console.log("Learning Hoisting");
};

//Hoisting - It is phenomena in javascript through which we can access the function
// and variables even before intializing it.

// Before javascript execute the above code it will provide value of undefiend to variable
// and actual copy of function in memory allocation.

//Hence answer lies in Global execution context.
