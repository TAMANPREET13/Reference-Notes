//DOM commands in multiple elements

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item')
console.log(items);
console.log(items[0]);

items[0].style.color = 'orange';
items[3].textContent = 'yoooooo';


const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


//document.getElementByTagNmae

let li = document.getElementsByTagName('li')
console.log(li);
console.log(li[0]);

li[0].style.color = 'red';
li[3].textContent = 'brooo';

//Convert li HTML Collection into array
li = Array.from(li);
li.reverse();
console.log(li);
li.forEach(function(lis, index) {
    console.log(lis.className);
    lis.textContent = `${index}: Hello`;
})

//document.querySelectorAll


const itemss = document.querySelectorAll('ul.collection li.collection-item');
itemss.forEach(function(item, index) {
    item.textContent = `${index}: hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function(lis, index) {
    lis.style.background = '#ccc';
})

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

console.log(itemss);