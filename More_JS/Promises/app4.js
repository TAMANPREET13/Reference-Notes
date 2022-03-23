const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recordedss')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recordeds')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recordedss')
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})

//All  promises run at the exact same time so 2nd and 3rd promise does not 
// need to wait for the 1st promise  to resolve  and vice versa.