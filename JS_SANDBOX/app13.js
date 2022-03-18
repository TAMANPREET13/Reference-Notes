// for loop
for (let i = 0; i < 10; i++) {
    // console.log('Numbers ' + i);

    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
    }

    if (i === 5) {
        console.log('Stop the loop');
        break;
    }
    console.log('Numbers ' + i);
}


//While loop

// let j = 0;

// while (j < 10) {
//     console.log('Number' + j);
//     j++;
// }


//do while

// let k = 100;
// do {
//     console.log('Numbers' + k);
//     k++;
// } while (k < 10);

// loop through an array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let j = 0; j < cars.length; j++) {
//     console.log(cars[j]);
// }

// for each loop

// cars.forEach(function(car, index) {
//     console.log(`${index}:${car}`);
//     // console.log(array);
// })


//Map

// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'sara' },
//     { id: 3, name: 'Karen' }

// ];

// const ids = users.map(function(user) {
//     return user.id;
// })

// console.log(ids);


//FOR IN LOOP

const user = {
    firstName: 'John',
    lastName: 'Nam',
    age: 45
}

for (let x in user) {
    console.log(`${x}:${user[x]}`);
}