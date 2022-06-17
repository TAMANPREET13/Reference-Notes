//Closures

//Eg - 1
// var sum = (a) => {
//   console.log("Hello Viewers Count = " + a);
//   var c = 4;
//   return (b) => {
//     return a + b + c;
//   };
// };

// var store = sum(2000); //Calling

// console.log(store(5));

//Eg - 2
var sum = (a, b, c) => {
  return {
    getSumTwo: () => {
      return a + b;
    },
    getSumThree: () => {
      return a + b + c;
    },
  };
};

var store = sum(3, 4, 5); //Calling
console.log(store.getSumTwo());
console.log(store.getSumThree());

var store1 = sum(7, 8, 10); //Calling
console.log(store1.getSumTwo());
console.log(store1.getSumThree());
