const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//Filter Method

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

//Map Method

const itemsName = items.map((item) => {
  return item.name;
});

console.log(itemsName);

//Find Method

const findItem = items.find((item) => {
  return item.name === "Book";
});

console.log(findItem);

//forEach Method

items.forEach((item) => {
  console.log(item.price);
});

//Some Method (It will check if any item is less than 100 it will return
// true)

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems);

//Every Method(It will return true only if all items are
//under 100 which is not the case so will return false)

const hasInexpensiveItemsss = items.every((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItemsss);

//**Reduce Method

const total = items.reduce((currentItem, item) => {
  return item.price + currentItem;
}, 0);
console.log(total);

//Includes Method

const itemss = [1, 2, 3, 4, 5];
const includesTwo = itemss.includes(2);
console.log(includesTwo);
