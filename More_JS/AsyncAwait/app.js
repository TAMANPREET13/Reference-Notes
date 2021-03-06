// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const err = false;

//     if (!err) {
//         const res = await promise; //Wait until promise is resolved
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunc().then(res => console.log(res))
//     .catch(err => console.log(err));


async function getUsers() {
    //await the response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //Only proceed once promise is resolved
    const data = await response.json();

    //only proceed when second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));