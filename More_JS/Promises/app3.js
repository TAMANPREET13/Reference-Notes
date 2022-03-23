const userLeft = true;
const userWatchCatMeme = false;

//Using callbacks

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchCatMeme) {
//         errorCallback({
//             name: 'User watching cat meme',
//             message: ' Webdevsimplified < cat'
//         })
//     } else {
//         callback('Thumbs Up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success ' + message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })


//Using promises(to resolve the problems 
//called as callback hell which is callback under callback 
//under and goes on promises were introduced)

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchCatMeme) {
            reject({
                name: 'User watching cat meme',
                message: ' Webdevsimplified < cat'
            })
        } else {
            resolve('Thumbs Up and Subscribe')
        }
    })
}


watchTutorialPromise().then((message) => {
    console.log('Success ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})