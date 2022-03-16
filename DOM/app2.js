//DOM Commands for single element

//document.getElementById()

console.log(document.getElementById('task-title'));

//get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

//Change styling
taskTitle.style.background = 'lightblue';
taskTitle.style.color = 'darkblue';
taskTitle.style.padding = '5px';

//change content
taskTitle.textContent = 'Task-Title';
taskTitle.innerText = 'Task-By-The-Way';
taskTitle.innerHTML = '<span style="color:yellow">My List</span>';


//document.querySelector()*************

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
// if there are more then 1 h5 on the webpage 
// it will get the first one and return
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(4)').style.color = 'pink';
document.querySelector('li:nth-child(3)').textContent = 'yo i am here';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';