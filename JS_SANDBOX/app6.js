const firstName = 'Williams';
const lastName = 'Johnson';
const age = 56;
const str = 'Hello my name is taman preet singh';

let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;

//append
val = 'Brad ';
val += 'traversy';

val = 'Hello my name is ' + firstName + ' I am ' + age;

//Escaping
val = 'Hello that\'s awesome, i can\'t wait';

//Length
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();

val = firstName[0];

// indexof()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('2');
//get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split()
val = str.split(' ');

//replace
val = str.replace('taman', 'anjan');

//includes()
val = str.includes('Hello');

console.log(val);