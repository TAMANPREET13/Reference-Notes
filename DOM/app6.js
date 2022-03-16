//replace elements

//create element
const newHeading = document.createElement('h2');

newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Task-Title'));

const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading, oldHeading);

//remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

//remove child element
list.removeChild(lis[3]);

//Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
//classes
val = link;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

//attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);