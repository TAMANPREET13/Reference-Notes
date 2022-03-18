// function declaration

function greet(firstName = 'John', lastName = 'Doe') {
    // if (typeof firstName === 'undefined') { firstName = 'John' }
    // if (typeof lastName === 'undefined') { lastName = 'Boe' }
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// FUNCTION EXPRESSION

const square = function(x = 3) {
    return x * x;
};

console.log(square());


//IMMEDIATELY INVOCABLE FUNCTION EXPRESSION - IIFE

// (function() {
//     console.log('IIFE ran....');
// })();


(function(name) {
    console.log('Hello ' + name);
})('Taman');


//Property Methods

const todo = {
    add: function() {
        console.log('Add todo ...');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...');
}


todo.add();
todo.edit(23);

todo.delete();