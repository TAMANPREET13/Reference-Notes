//Iterator Example
// function nameIterator(names) {
//     let nameIndex = 0;

//     return {
//         next: function() {
//             return nameIndex < names.length ? { value: names[nameIndex++], done: false } : { done: true }
//         }
//     }
// }

// //Create an array of names
// const namesArr = ['jack', 'jill', 'john'];
// //Initialize iterator and pass the name Array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());


//Generators:- are basically function that can return multiple values

//Generator Example
// function* sayName() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }
// const name = sayName();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());

//ID Creator(through generator)
function* createIDs() {
    let index = 12;

    while (true) {
        yield index++;
    }
}
const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);