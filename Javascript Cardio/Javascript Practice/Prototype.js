let arr = ["Akshay", "Aditya"];

let obj = {
  name: "Taman",
  city: "Delhi",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};

let obj2 = {
  name: "Aditya",
};

//Never do this
obj2.__proto__ = obj;
