// let heading = document.querySelector(".title");
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
    document.querySelector(".title").innerHTML = output;
  }, 2000);
};

const createPosts = (post) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;

      if (!err) {
        res();
      } else {
        rej("ERROR SOMETHING WENT WRONG");
      }
    }, 3000);
  });
};

createPosts({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

//Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((res, rej) => {
  setTimeout(res, 2000, "Goodbye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
