//Implementing Memoization in javascript
//Memoization is a optimization technique that can be used to reduce
// time consuming calculations by saving previous input to something called
// cache amd returning the results from it.

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("calculating first time");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};
console.time();
const efficient = memoize(calc);
console.log(efficient(5));
console.timeEnd();

console.time();
const efficients = memoize(calc);
console.log(efficients(5));
console.timeEnd();

console.time();
const efficientss = memoize(calc);
console.log(efficientss(5));
console.timeEnd();
