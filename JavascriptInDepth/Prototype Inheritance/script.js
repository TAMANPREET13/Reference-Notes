let object = {
  name: "Tamanpreet",
  city: "Delhi",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "Akshay",
};

//Never do this(leads to issues)
object2.__proto__ = object;
//hence object2 will inheret city from object this is called
//prototypal Inheritance.

//Object2 is inheriting properties and methods from proto which is
// pointing toward object.

Function.prototype.mybind = function () {
  console.log("sheeeeeee");
};

function fun() {}

function fun2() {}

//fun,fun2 both can access mybind because it is declared with protoype
