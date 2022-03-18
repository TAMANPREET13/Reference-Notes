// Constructor and This Keywords

//Person constructor

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    //Method
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
// console.log(this);
// const taman = new Person('taman', 22);
// const john = new Person('john', 30);

// console.log(taman.age);

const taman = new Person('tamna', '05-13-2000');
console.log(taman.calculateAge());