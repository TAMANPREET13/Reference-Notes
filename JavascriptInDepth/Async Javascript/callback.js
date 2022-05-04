//Sync code example

// function otherFunc() {
//   console.log("we are in another funct");
//   console.log("do some stuff");
// }

//Async code eg

console.log("Start");

// otherFunc();

// the below code is an eg of async callbacks
setTimeout(() => {
  console.log("We are in the timeout");
}, 2000);

//But all callbacks are not async some are also sync
const items = [1, 2, 3, 4, 5];
items.forEach((item) => {
  console.log(item);
});

console.log("End");

//From here
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} : ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
};

const createPosts = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
};

createPosts({ title: "Post Three", body: "This is post three" }, getPosts);
