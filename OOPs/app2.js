//BUILT IN CONSTRUCTOR

//String
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);

// name2.foo = 'bar';

console.log(typeof name2);

if (name2 === 'Jeff') {
    console.log('yes');
} else {
    console.log('No');
}


//Numbers
const num1 = 5;

const num2 = new Number(5); // through constructor using object

console.log(num2);
console.log(typeof num2);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true); // through constructor using object


//Functions
const getSum1 = function(x, y) {
    return x + y;
}
console.log(getSum1(1, 2));

const getSum2 = new Function('x', 'y', 'return 1 + 3'); // through constructor using object
console.log(getSum2(1, 3));


//Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'john' });
console.log(john2);


//Arrays
const arr1 = [1, 2, 3, 4];
// const arr2 = new Array[1, 2, 3, 4];

console.log(arr2);