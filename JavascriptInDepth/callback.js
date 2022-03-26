//when a function is passed inside another function and
//is invoked after some task happens.

// eg of a callback

let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
    console.log("I was Clicked!!");
});

let student = [
    { score: 90, school: "East" },
    { score: 100, school: "East" },
    { score: 40, school: "East" },
    { score: 90, school: "West" },
    { score: 85, school: "East" },
    { score: 95, school: "West" },
    { score: 75, school: "East" },
];

let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
};

let determineTotal = function() {
    let total = 0,
        count = 0;

    processStudents(student, function(obj) {
        total = total + obj.score;
        count++;
    });
    console.log("Total Score" + total + "-" + "total Count:" + count);
};

determineTotal();