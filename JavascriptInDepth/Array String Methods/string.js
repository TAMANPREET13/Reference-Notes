// 20 String Methods

let stringOne = "freeCodeCamp is the best place to learn ";
let stringTwo = "frontend and backend development";

//CharAt()
console.log(stringOne.charAt(1));

//CharCodeAt()
console.log(stringOne.charCodeAt(1));

//concat()
console.log(stringOne.concat(stringTwo));

//endsWith
console.log(stringOne.endsWith(" "));

//fromCharCode()
console.log(String.fromCharCode(114));

//includes()
console.log(stringOne.includes("learn"));

//indexOf()
console.log(stringTwo.indexOf("end"));

//lastIndexOf
console.log(stringTwo.lastIndexOf("end"));

//match()
console.log(stringTwo.match(/end/g));

//repeat()
console.log(stringOne.repeat(3));

//replace()
console.log(stringTwo.replace(/end/g, "END"));

//search()
console.log(stringTwo.search("end"));

//slice()
console.log(stringTwo.slice(2, 4));

//split()
console.log(stringTwo.split(" "));

//startsWith()
console.log(stringOne.startsWith("free"));

//substr()
console.log(stringTwo.substr(2, 4));

//substring()
console.log(stringTwo.substring(2, 4));

//trim()
let string3 = "    Subscribe to me!     ";
console.log(string3.trim());
