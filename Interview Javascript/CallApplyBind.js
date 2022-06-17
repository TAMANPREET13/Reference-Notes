// Apply , Call and Bind

// problem statement

let userDetail = {
  name: "Tamanpreet Singh",
  Age: 22,
  Designation: "Assistant System Engineer",
};

let printDetails = function (state, country) {
  console.log(this.name + state + country);
};

printDetails.call(userDetail, " Delhi", " India");

let userDetail2 = {
  name: "Anonymous Singh",
  Age: 24,
  Designation: "Assistant System Engineer",
};
//Function Borrowing
printDetails.call(userDetail2, " Delhi", " India");

//Apply:-Only difference btw call and apply is apply takes single argument in form of arraylist.
printDetails.apply(userDetail2, [" Delhi", " India"]);

//Bind
let newFun = printDetails.bind(userDetail, " Delhi", " India");
newFun();
