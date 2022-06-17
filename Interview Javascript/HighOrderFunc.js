//High order function

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [33, 12, 20, 16, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

companies.forEach((company, index) => console.log(company.name));

//Filter

// const age = ages.filter((age) => {
//   if (age >= 20) {
//     return true;
//   }
// });
const age = ages.filter((age) => (age >= 20 ? true : false));
console.log(age);

const sb = companies.filter((company) =>
  company.category === "Service Based" ? true : false
);
console.log(sb);

//Map
const dummy = companies.map((company, index) => {
  return `${company.name} ${company.category}`;
});
console.log(dummy);

//Sort
const sorted = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sorted);

const sortedAges = ages.sort((c1, c2) => c1 - c2);
console.log(sortedAges);

//Reduce

const sumAge = ages.reduce((total, age) => {
  return total + age;
}, 0);

console.log(sumAge);
