//regular expression:- It is bascially used to describe 
//a pattern of character.they are commonly used for validation or pulling
// a body out of text eg email address,social security number etc.


let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

console.log(re);
console.log(re.source);

// exec() => returns result in an array or null

const result = re.exec('brad hello world');

console.log(result);

console.log(result[0]);
console.log(result.index);
console.log(result.input);


//Test() - returns true or false
const results = re.test('Hello');
console.log(results);

//Match() - returns result array or null
const str = 'Hello there';
const resultss = str.match(re);
console.log(resultss);

//Search()- returns the index of first match if not found return -1
const strr = 'Brad Hello there'
const resultsss = strr.search(re);
console.log(resultsss);

//replace() - return a new string with some or all matches of a pattern
const strrr = 'Hello there'
const newStr = strrr.replace(re, 'Hi');
console.log(newStr);