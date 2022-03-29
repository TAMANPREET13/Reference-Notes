const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filterItems = items.filter((items) => {
  return items.price <= 100;
});

const itemNames = items.map((items) => {
  return items.price;
});

const foundItem = items.find((item) => {
  return item.name === "Album";
});

const inexpensiveItems = items.some((item) => {
  return item.price <= 1;
});

const hasInexpensiveItems = items.every((item) => {
  return item.price <= 1000;
});

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(filterItems);
console.log(itemNames);
console.log(foundItem);
console.log(inexpensiveItems);
console.log(hasInexpensiveItems);
console.log(total);

const numbers = [1, 2, 3, 4, 5];
const includes = numbers.includes(7);

console.log(includes);
