# Basics of javascript

*  __var__ can only have letters,numbers,_,$ and they cannot start from a number.
  
  ```eg 
  $name or 1name are wrong we should generally start with a letter
  ```

* __const__ we cannot reassign to a const variable 
* and we cannot leave it uninitialized we have to initialize it.    
* __WE CANNOT REASSIGN THE VARIABLE A NEW VALUE BUT WE CAN PERFORM CHANGES IN IT LIKE ADD OR REMOVE FROM AN OBJECT OR A
  ARRAY

```eg  
    const numbers = [1, 2, 3, 4, 5];
    numbers.push(6);
    console.log(numbers);
  ```

## Data types
  ### Primitive data types
  * Stored directly in the location the variable accesses.Generally stored in Stack.
  1. String
  2. Number
  3. Boolean
  4. Null
  5. Undefiened
  6. Symbols(ES6)

  ### Reference data types
  * Accessed by refernce
  * Object that are stored on heap
   1. Arrays
   2. Objecrt literals
   3. functions
   4. dates
   5. anything else
 
 * Javascript is dynamically typed language which means that the types are associated with values not variables.
 * Most other languages are statically typed(java,c#,c++)

#### Template Strings
* Template string is a feature of ES6 and is much better then string concatenation.
```eg
html += `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>job: ${job}</li>
<li>city: ${city}</li>
</ul>
`

```
## DOM
![Screenshot](Images/Screenshot%20(165).png)


#### Dom Selectors
* These are document object methods which basically helps us to pull things from the dom and we can do different things with those elements.

there are two types of selector:-
* Single element Selector
* Multiple element Selector

Single element-allow us to select an element with id or class

```
//document.getElementById()

console.log(document.getElementById('task-title'));
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

```

Multiple element- allows us to select multiple elements are return them in form a  nodelist.

```
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function(lis, index) {
    lis.style.background = '#ccc';
})

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

console.log(itemss);
```

  # Constructor
  It can be bascially used to create object instances so that we can create as many objects as we want and it can also be used to create method inside it eg

  ```
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
  ``` 
  this.calculateAge is a method used to calculate the actual age using birthday.



  # Prototype
 Each object in javascript has a prototype and a prototype is object itself
 All object inherit there properties from prototypes

 There are two types of prototypes :-
 * Object.prototype- prototype from object
 * Person.prototype= prototype from constructor


 * we can not only get data from a prototype but also manupilate it.
 * 

## Difference between synchronous and asynchronous javascript:-

![screenshot](Images/Screenshot%20(170).png)

![screenshot](Images/Screenshot%20(171).png)

* Aschyronous javascript is bascially faster then synchronous javascript dur to the reasons given above.

![screenshot](Images/Screenshot%20(172).png)

![screenshot](Images/Screenshot%20(173).png)

# AJAX

![screenshot](Images/Screenshot%20(174).png)

* the process involved in working of AJAX is method below:-

![screenshot](Images/Screenshot%20(175).png)

 * About  XHR(OBJECT) which is used in ajax.

![screenshot](Images/Screenshot%20(176).png)

![screenshot](Images/Screenshot%20(177).png)



# REST API

![screenshot](Images/Screenshot%20(187).png)

![screenshot](Images/Screenshot%20(188).png)

* As rest relies only on HTTP request and json object therefore can be used by virtually any programming language.

* So API is the messanger and rest let us use HTTP  request to format that message.Rest uses multiple types of HTTP request eg get




## Different types of request

![screenshot](Images/Screenshot%20(189).png)

![screenshot](Images/Screenshot%20(194).png)


# Callbacks

It is bascially a function which is passed in inside the parameter of another function.

eg  Array.forEach(function()),setTimeOut

Two Types of callbacks
* Synchronous callbacks
* Asynchronous callbacks



# Regular Expression
*  It is bascially used to describe a pattern of character.they are commonly used for validation or pulling a body out of text eg email address,social security number etc which have a certain pattern in them.

* you can get more knowledge of them in :-
  
[Link text Here](/Error%20Handling%20Regular%20Expression/Regular%20Expression/app.js)


# Pattern
A reusable solution that can be applied to occuring problems in software 
design(javascript application)

* Can also be thought of as programming templates
* situations vary significantly.

Pattern to study are as follow:-
1. Module
2. Revealing Module Pattern
3. Singleton
4. Factory
5. Observer
6. Mediator
7. State


# Callbacks
Callback were introduced to prevent bottle necking that came with the 
synchronous javascript code but callbacks itself has lot of problems which are:-

* Callback Hell:- nested callbacks are difficult to comprihend
* Difficult to reason about because when complexity increases it is      difficult to predict the output.
* Inversion of control:- turning your control to something else
  
  
# Promises

A promise is simply javascript object with properties and methods.
* Represent the eventual completion of an asynchronous operation.
* Provides a resulting value
* Chainning takes place in promises



# Closures

```
const myName = "tamanpreet";

function printName() {
  console.log(myName);
}

printName();

```
* the above is an example of closure where we can excess the global variable inside a function.


# Higher order function
A higher order function is a function that either:
(a) Accepts a function as arguments
(b) returns a function


