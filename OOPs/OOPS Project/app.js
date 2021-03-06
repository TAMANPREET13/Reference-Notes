//Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn
}

//UI Constructor
function UI() {}


UI.prototype.addBookToList = function(book) {
    // console.log(book);
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');
    //Insert calls
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class ="delete">X</a></td>`;

    list.appendChild(row);
}

//Show alerts
UI.prototype.showAlert = function(message, className) {
    //Create div
    const div = document.createElement('div');
    //add classname
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div, form);

    //set timeout to 3 sec
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

//Delete book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

//Clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event listeners for add book
document.getElementById('book-form').addEventListener('submit',
    function(e) {
        //Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        //Instantiate a book
        const book = new Book(title, author, isbn);

        //Instantiate UI
        const ui = new UI();


        // Validate
        if (title === '' || author === '' || isbn === '') {
            ui.showAlert('Please fill all the fields', 'error');
        } else {
            //Add book to list
            ui.addBookToList(book);

            //Show success
            ui.showAlert('Book Added', 'success');

            //Clear fields
            ui.clearFields();
        }

        e.preventDefault();
    });

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {

    //Instantiate UI
    const ui = new UI();

    //Delete book
    ui.deleteBook(e.target);

    //Show message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
})