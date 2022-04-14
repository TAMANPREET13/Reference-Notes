const user = [
  { firstName: "akshay", lastName: "Saini", age: 26 },
  { firstName: "elon", lastName: "musk", age: 45 },
  { firstName: "donald", lastName: "trump", age: 67 },
  { firstName: "virat", lastName: "kholi", age: 26 },
  { firstName: "resham", lastName: "chawla", age: 22 },
];

const output = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

const output2 = user.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output2);
