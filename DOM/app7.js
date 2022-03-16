// Event Listeners
// document.querySelector('.clear-tasks').addEventListener('click',
//     function(e) {
//         console.log('Hello');
//         e.preventDefault();

//     })



document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    // console.log('Clicked');

    let val;
    val = e;

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'hello';

    //Event type
    val = e.type;

    //timestamp
    val = e.timeStamp;

    //coord event relative to the window
    val = e.clientY;
    val = e.clientX;

    //coord event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}