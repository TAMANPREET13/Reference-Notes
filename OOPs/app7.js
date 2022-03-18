class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetings() {
        return `hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('john', 'doe', '99999999', 'Standard');

console.log(john.greetings());

console.log(Customer.getMembershipCost());