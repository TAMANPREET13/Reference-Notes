//Prototype
// Each object in javascript has a prototype and a prototype is object itself
//All object inherit there properties from prototypes

//Object.prototype- prototype from object
//Person.prototype= prototype from constructor

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.age = age;
    this.birthday = new Date(dob);

    //Method
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Calculate age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get fullName
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//we can not only get data from a prototype but also manupilate it.
//Gets married
Person.prototype.getMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));