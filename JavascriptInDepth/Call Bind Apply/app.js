//Apply,call & bind in JS

// Use of call

let userDetails = {
  name: "Ajay Suneja",
  Age: 21,
  Designation: "SDE",
  //   printDetails: function () {
  //     console.log(this.name);
  //   },
};
let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};
printDetails.call(userDetails, "Delhi", "India");

let userDetails2 = {
  name: "Anjale Suneja",
  Age: 26,
  Designation: "SDE2",
};
//we apply call here to access object2 using object1
//this is called function borrowing

// userDetails.printDetails.call(userDetails2);

// printDetails.call(userDetails2, "Delhi", 'India');

//The difference btw call and apply is in call we are passing a individual
// elements like "delhi" in apply we can pass it in form of a array list.

//eg of APPLY
printDetails.apply(userDetails2, ["Delhi", "India"]);

//BIND- we didnt call the func instead we stored its copy in newFun and then called newFun
let newFun = printDetails.bind(userDetails, "Delhi", "India");
newFun();

//So with bind we can create a copy of our function and invoke it later.
