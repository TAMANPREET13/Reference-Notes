//Map, set, WeakSet, WeakMap
"use strict";

//set- It contians only unique values
//Object constructor

let myArr = [1, 2, 3, 4];
let obj = new Set(myArr);
console.log(obj);
obj.add(5);
console.log(obj);

obj.delete(5);
console.log(obj);

var obj1 = { name: "Tamanpreet" };
obj.add(obj1);
console.log(obj);

// obj.clear();
// console.log(obj);
console.log(obj.has(10));

// for (let new1 of obj) {
//   console.log(new1);
// }

// obj.forEach((element) => {
//   console.log(element);
// });

//Map -> Key -> Values

let myMap = new Map([
  ["a1", "Ajay"],
  ["a2", "Vikas"],
]);

myMap.set("a2", "Ajay");
console.log(myMap);

myMap.delete("a2");
console.log(myMap);
//We can also use set and clear

for (let [key, value] of myMap) {
  console.log(`keys ${key}, values ${value}`);
}

myMap.forEach((key, value) => {
  console.log(key, value);
});

//WeakSet
//Only store Objects and cannot be iterated
let ws = new WeakSet();
var ob1 = { name: "Tiger" };
var ob2 = {};
ws.add(ob1);
ws.add(ob2);
console.log(ws);

//WeakMaps
