//set local storage
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

//set sessional storage
sessionStorage.setItem('name', 'yo bro');

//remove from storage
// localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//clear local storage
// localStorage.clear();

// console.log(name, age);


document.querySelector('form').addEventListener('submit',
    function(e) {
        const task = document.getElementById('task').value;
        console.log(task);

        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        alert('task saved');

        e.preventDefault();
    })