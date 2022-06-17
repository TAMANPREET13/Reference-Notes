//ES6
//Rest & Spread Operator

//Example Rest //used for combining a array or object

function addNumbers(a, b, c, ...otherVariable) {
  console.log(otherVariable);
  return a + b + c + otherVariable[0];
}

const res = addNumbers(2, 4, 5, 8, 9, 7, 8, 9);
console.log(res);

//Example Spread

var names = ["Ajay", "Anuj", "Vivek", "Ram"];
function getNames(name1, name2, name3, name4) {
  console.log(name1, name2, name3, name4);
}

// getNames(names[0], names[1], names[2]);
getNames(...names); // Best way

//Object ka sath -> Rest
var students = {
  name: "Ajay",
  age: "28",
  hobbies: ["Cricket", "Singing"],
};

// const age = students.age;
const { ...rest } = students; //Array Destructuring
console.log(rest);

//Spread
var students2 = {
  ...students,
  age: "29",
};

console.log(students2);
