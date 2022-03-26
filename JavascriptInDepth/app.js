let test = function() {
    setTimeout(function() {
        console.log("Hello i am here");
    }, 3000);
};

let test2 = function() {
    console.log("Call me first");
};

test();
test2();