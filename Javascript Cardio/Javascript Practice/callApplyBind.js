let name = {
  firstname: "Tamanpreet",
  lastname: "Singh",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + " , " + state
  );
};

printFullName.call(name, "New Delhi", "Delhi");

let name2 = {
  firstname: "sachin",
  lastname: "Tendulkar",
};

//Call method(function borrowing)
printFullName.call(name2, "Mumbai", "Maharashtra");

//Apply Method(We pass argument as an arraylist)
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//Bind method(It will return us a method which can be called later)
let printMyName = printFullName.bind(name, "New Delhi", "Delhi");
console.log(printMyName);
printMyName();
//Bind gives us a copy which can be invoked later.
