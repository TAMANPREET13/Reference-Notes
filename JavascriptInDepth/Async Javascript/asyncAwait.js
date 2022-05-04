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

//Async Await
const init = async () => {
  await createPosts({ title: "Post Three", body: "This is post three" });

  getPosts();
};

init();

// Async Await with Fetch
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
};

fetchUsers();
