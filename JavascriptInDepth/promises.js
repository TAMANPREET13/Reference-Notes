let promise = asyncFunction();

promise.then(function(val) {
    console.log("Yeah!!" + val);
});

console.log("this code is asynchronous");