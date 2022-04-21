// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hi my name taman");
// }
// x();

// The above code will print 6  5 times because all the i's will be pointing towards
// the same spot in  memory so by the time setTimeout get chance to print the value
// it has already become 6 .

// Improvement in above code to print (1,2,3,4,5)

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("hi my name taman");
}
x();

// In the above code we changed var with let which has a block scope so
// whenever i runs in loop everytime it is a new variable all together
// Hence settimeout everytime gets a new value of i.

//Another method to fix above code using var only
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Hi my name is taman");
}
x();
