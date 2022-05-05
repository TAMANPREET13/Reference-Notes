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
let printDetails = function () {
  console.log(this.name);
};
printDetails.call(userDetails);

let userDetails2 = {
  name: "Anjale Suneja",
  Age: 26,
  Designation: "SDE2",
};
//we apply call here to access object2 using object1
//this is called function borrowing
// userDetails.printDetails.call(userDetails2);
printDetails.call(userDetails2);
