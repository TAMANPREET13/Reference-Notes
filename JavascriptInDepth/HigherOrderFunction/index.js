const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}

//MAP
const output = arr.map(binary);
console.log(output);

//Another way
const output2 = arr.map((x) => {
  return x * 3;
});
console.log(output2);

//FILTER
const arr2 = [5, 1, 3, 2, 6];

//filter odd values
function isOdd(x) {
  return x % 2;
}
function greaterThan4(x) {
  return x > 4;
}
const output3 = arr2.filter(greaterThan4);
console.log(output3);

//REDUCE

//sum using reduce
const output4 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output4);

//Max using reduce
const output5 = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(output5);
