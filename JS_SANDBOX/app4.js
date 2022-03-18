let val;

// number to string

val = String(555);
val = String(4 + 4);

// boolean to string
val = String(true);
// date tp string
val = String(new Date());
// array to string
val = String([1, 2, 3, 4, 5]);

//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3, 4, 5]);

val = parseInt('100.30');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));


const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);