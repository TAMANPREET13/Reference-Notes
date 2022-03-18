let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('May 13 2000');
birthday = new Date('05/13/2000')

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime();


birthday.setMonth(2)

console.log(val);
console.log(birthday);