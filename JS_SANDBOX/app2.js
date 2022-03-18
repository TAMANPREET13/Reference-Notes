//var, let and const

// var names = 'John smith';
// console.log(names);
// names = 'Willow Smith';
// console.log(names);

// //Init var(only Initializing)
// var greetings;
// console.log(greetings);
// greetings = 'hello';
// console.log(greetings);

// // Multi words vars
// var firstName = 'John' // camel case
// var first_name = 'Sara' // underscore
// var FirstName = 'Tom';
// var firstname;


//  LET
// let names = 'John smith';
// console.log(names);
// names = 'Willow Smith';
// console.log(names);


//CONST
const names = 'John smith';
console.log(names);
// names = 'Willow Smith';
// console.log(names);

// const greeting; // we have to assign a value.

const person = {
    name: 'John',
    age: 30
}
person.name = 'Sara';
person.age = 45;

console.log(person);


const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);