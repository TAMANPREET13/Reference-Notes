const http = new easyHTTP;

//Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts',
//     function(error, posts) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(posts);
//         }
//     });

//Get single post

// http.get('https://jsonplaceholder.typicode.com/posts/1',
//     function(error, post) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(post);
//         }
//     });


//Create Data
const data = {
    title: 'Custom post',
    body: 'This is a custom post'
};

// //Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
//     function(err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
//     });


//Update post
// http.put('https://jsonplaceholder.typicode.com/posts/6', data,
//     function(err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
//     });


//Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
        }
    });