const id = '100';

//Equal to

// if (id == 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// // Not equal to
// if (id != 101) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// //Stricly Equal
// if (id === 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// //Stricly not equal
// if (id !== 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// //Test if undefined
// if (typeof id !== 'undefined') {
//     console.log(`the id is ${id}`);
// } else {
//     console.log('No id');
// }

// //Greater or less then
// if (id >= 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

//IF ELSE

const color = 'yellow';

// if (color === 'red') {
//     console.log('color is red');
// } else if (color === 'blue') {
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue');
// }


// logical operators

const name = 'Steve';
const age = 20;

if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}