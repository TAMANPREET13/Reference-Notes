//Create Element and insert in dom
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New Item');

//create text node and append
let val = document.createTextNode('Hello World');
li.appendChild(val);

//Create a new link
const link = document.createElement('a');

link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = ' <i class="fa fa-remove"></i>';
//append under li
li.appendChild(link);


// append li as child under ul
document.querySelector('ul.collection').appendChild(li);




console.log(li);