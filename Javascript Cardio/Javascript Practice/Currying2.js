function Addition(a, b, c) {
  return a + b + c;
}

let res = Addition(5, 5, 5);
console.log(res);

function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// let ress = addition(2);
// let data = ress(4);
// let data1 = data(7);
// console.log(data1);

let ress = addition(2)(4)(7);
console.log(ress);

//Real life use Case for Currying

userObj = {
  name: "Taman",
  age: 22,
};

function userInfo(obj) {
  return function (userInfo) {
    return obj[userInfo];
  };
}

let output = userInfo(userObj);
console.log(output("name"));
