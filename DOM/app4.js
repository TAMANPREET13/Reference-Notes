//Traversing in dom

let val;

const list = document.querySelector('ul');
const listItems = document.querySelector('li.collection-item:first-child');

val = listItems;
val = list;

//Get child nodes
val = list.childNodes; // it will return a nodelist and count the linbreaks in it
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // gives us 3 because
// 1 - Elements
// 2- attribute
//3 - text node
//8 - comment
//9 - document itself
//10 - doctype


//Get children nodes
val = list.children; // it will return a list of html elements .
val = list.children[2];
list.children[1].textContent = 'Hello';

//Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//First child
val = list.firstChild;
val = list.firstElementChild;

//Last child
val = list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

//Get parent node
val = listItems.parentNode;
val = listItems.parentElement;
val = listItems.parentElement.parentElement;

//Get next Sibling
val = listItems.nextSibling;
// val = listItems.nextElementSibling.nextElementSibling;


//Get previous sibling
val = listItems.previousSibling;
val = listItems.previousElementSibling;

console.log(val);