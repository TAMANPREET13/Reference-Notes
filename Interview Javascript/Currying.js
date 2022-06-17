//Currying function in js

// function Addition(a, b, c) {
//   return a + b + c;
// }

// const res = Addition(2, 3, 4);
// console.log(res);

function Addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const ress = Addition(2);
let data = ress(4);
let data1 = data(7);
console.log(data1);

userObj = {
  name: "taman",
  age: 22,
};

function userInfo(obj) {
  return function (userInfo) {
    return obj[userInfo];
  };
}
let results = userInfo(userObj);
console.log(results("name"));
