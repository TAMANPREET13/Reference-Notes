const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    Age: 30,
    email: 'Steve30@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'miami',
        state: 'fl'
    },
    getBirthYear: function() {
        return 2017 - this.Age;
    }
}

let val;

val = person;

//Get a specific value
val = person.firstName;
val = person['firstName'];
val = person.Age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);


const people = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 23 },
    { name: 'Nancy', age: 87 }

];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}