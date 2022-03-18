//SETS - Store unique values of any type

const set1 = new Set();

//Add value to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, 'String']);
// console.log(set2);

console.log(set1);

//Get count
console.log(set1.size);

//Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: 'John' })); // reference value not primitive stored in heap not stack therfore false

//Delete from a set
set1.delete(100);
console.log(set1);

//Iterating through sets

//For...of
for (let item of set1) {
    console.log(item);
}

//For each loop
set1.forEach((value) => {
    console.log(value);
})

//Convert into Arrays
const setArr = Array.from(set1);
console.log(setArr);