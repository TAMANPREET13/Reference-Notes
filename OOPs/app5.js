const personPrototype = {
    greetings: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }

}

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Jane';
mary.age = 22;

mary.getsMarried('jefresons')

console.log(mary.greetings());

const brad = Object.create(personPrototype, {
    firstName: { value: 'brad' },
    lastName: { value: 'traversy' },
    age: { value: 36 }
});

console.log(brad);

console.log(brad.greetings());