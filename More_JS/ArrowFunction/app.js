//Normal Function
// const sayHello = function() {
//     console.log("Hello");
// }


//Arrow Function
// const sayHello = () => {
//     console.log('hello');
// }

//One line arrow function
// const sayHello = () => console.log('Hellooo');

// const sayHello = () => 'hello';

//Same as above
// const sayHello = function() {
//     return 'Hello';
// }


//Returns an object
// const sayHello = () => ({ msg: 'Hello' })

//Single parameter does not need paranthesis
const sayHello = name => console.log(`Hello ${name}`);

sayHello('Tamanpreet');


//Multiple parameters require paranthesis
const sayHello2 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello2('tamanpreet', 'Singh');


const users = ['Nathan', 'John', 'Williams'];
const nameLength = users.map(function(name) {
    return name.length;
})
console.log(nameLength);

//Know doing same by using arrow (=>) function
const nameLengthsss = users.map((name) => {
    return name.length
})
console.log(nameLengthsss);

//Shortest Method using =>
const nameSize = users.map(name => name.length);
console.log(nameSize);