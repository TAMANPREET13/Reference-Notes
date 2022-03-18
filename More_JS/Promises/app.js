const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];


//Asynchronous callbacks

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    })
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title} ${post.body}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({ title: 'Post three', body: 'this is post three' })
    .then(getPost).catch(function(error) {
        console.log(error);
    });