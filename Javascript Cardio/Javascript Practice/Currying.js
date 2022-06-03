//Function Currying

let multiply = function (a, b) {
  console.log(a * b);
};

let multiplyByTwo = multiply.bind(this, 2, 3); // a = 2 b = 3
multiplyByTwo(5); // b = 5 value of b here will be ignored when we pass 3 value in above code

let multiplyByThree = multiply.bind(this, 3); // a = 3
multiplyByThree(5);

//Another way to do function currying is through Closures:-

let multiplys = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
multiplys(2)(4);

let multiplyByFour = multiplys(4);
multiplyByFour(4);
