//Difference Btw Let and Var:-

var times = 4;
// use let in place of var then see the output we will get error because their is no concept of hoisting
// in let.
if (times > 3) {
  var hello = "Hi bro";
  console.log(hello);
}
console.log(hello);

//If we do the same thing with let it will give error because in let we cant
// Redeclare in the same scope....Hence therefore Let is better.
var yo = "ouput";
var yo = "No ouput";
console.log(yo);
