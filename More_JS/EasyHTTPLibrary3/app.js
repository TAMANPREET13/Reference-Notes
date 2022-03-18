const http = new EasyHTTP;

//Get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//user data
const data = {
    name: 'John doe',
    username: 'Johndoee',
    email: 'joe121@gmail.com'
}

//Post user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


//Update post(put)
// http.put('https://jsonplaceholder.typicode.com/users/7', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))