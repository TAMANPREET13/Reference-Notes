//Prototype Inheritence

//Person constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greetings = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const Person1 = new Person('taman', 'Preet');

console.log(Person1.greetings());

//Inherit the Person prototype method in Customer
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return customer
Customer.prototype.constructor = Customer;

//Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Create customer
const customer1 = new Customer('Tom', 'Singh', '999999999', 'Standard');

console.log(customer1);

//Customer greeting
Customer.prototype.greetings = function() {
    return `Hello there ${this.firstName} ${this.lastName} 
    welcome to our company`;
}

console.log(customer1.greetings());