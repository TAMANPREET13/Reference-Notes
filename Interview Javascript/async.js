//Async JS Programming
//Callbacks, Promises, Async & Await

const datas = [
  { name: "Taman", Profession: "Software Engineer" },
  { name: "Anuj", Profession: "Software Engineer3" },
];

const getDatas = () => {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name} : ${index} : ${data.Profession}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createData = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Kuch sahi nhi hai");
      }
    }, 2000);
  });
};

// createData({ name: "Vivek", Profession: "Software Developer" })
//   .then(getDatas)
//   .catch((err) => console.log(err));

// Async & Await;

const start = async () => {
  await createData({ name: "Vivek", Profession: "Software Developer" });
  getDatas();
};

start();
