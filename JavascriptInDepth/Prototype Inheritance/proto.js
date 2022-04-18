const obj = {
  name: "Tamanpreet Singh",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};
console.log(obj);

const obj2 = {
  age: 21,
  name: "vivek",
  __proto__: obj,
};

console.log(obj2.getAge());

const obj3 = {
  class: "MCA",
  __proto__: obj2,
};
console.log(obj3.getName());

//Arrays
const array = ["Ajay"];
console.log(array);

//If you want to check properties of array
// const arr = new Array();
// console.log(arr);

//Eg of a polyfill
Array.prototype.show = function () {
  return this;
};
const cities = ["Delhi"];
console.log(cities.show());

//Convert array int object
Array.prototype.convertIntoObj = function () {
  let newObj = {};
  this.forEach((element) => {
    newObj[element] = element;
  });
  return newObj;
};

console.log(cities.convertIntoObj());

//Constructor
class MyPrototype {
  constructor(name) {
    this.name = name;
  }
}
MyPrototype.prototype = obj;

const myProto = new MyPrototype("Pria");
console.log(myProto.name);
