// create some arrays
const numbers = [43, 56, 33, 23, 24, 36, 5];
const numbers2 = new Array(1, 2, 3, 4, 5);
const fruits = ['banana', 'Apple', 'Orange', 'Mango'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

let val;

//get array length
val = numbers.length;
//check idf it is an array
val = Array.isArray(numbers);
//get a single value from array
val = numbers[3];
val = numbers[0];
//Insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(36);


//Mutating arrays
// add to the  end
numbers.push(250);
// add to front
numbers.unshift(120);
//remove from back
numbers.pop();
//remove from front
numbers.shift();
//Splice values
numbers.splice(1, 3);
//reverse
numbers.reverse();

//concatenate arrays
val = numbers.concat(numbers2);

//Sorting arrays
val = numbers.sort(function(x, y) {
    return x - y;
})

//Reverse sort
val = numbers.sort(function(x, y) {
    return y - x;
})

//Find
function under50(num) {
    return num < 50;
}
val = numbers.find(under50);


console.log(numbers);

console.log(val);