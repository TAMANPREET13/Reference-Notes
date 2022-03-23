function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);

        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Proccessing Response');
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Response Recieved');
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse);
// }).catch(err => {
//     console.log(err);
// })


//Code with async await which is much easier to read then .then and .catch
// block above.

async function doWork() {
    try {
        const response = await makeRequest('Faccebook');
        console.log('Response Recieved');
        const processResponse = await processRequest(response);
        console.log(processResponse);
    } catch (err) {

        console.log(err);
    }
}
doWork();