let myLibrary = [];
let saved = [];
const modal = document.getElementById("modal");
const addButton = document.getElementById("add");
const submitForm = document.getElementById("submit-form");
const bookShelf = document.getElementById("book-shelf");
const closeButton = document.getElementsByClassName("close")[0];
const form = document.querySelector("form");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

myLibrary.prototype = Object.create(Book.prototype);

function addBookToLibrary() {
    myLibrary.push(new Book(saved['title'],saved['author'],saved['pages'],saved['read']));
}

function deleteBook(key) {
    myLibrary.filter(val => !val.hasOwnProperty[key]);
  }

function createBook(key) {
  const book = document.createElement("div");
  const bookChild = book.appendChild(book);
  bookShelf.appendChild(book).className = "book";
  book.appendChild(book).className = "book-text";
  bookText.appendChild(book).className = "name";
  bookText.appendChild(book).className = "author";
  bookText.appendChild(book).className = "pages";
  elementInsideDiv.insertAdjacentHTML('afterbegin', myLibrary[key].title);


}

 
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookForm = new FormData(form);

    bookForm.forEach((value,key) => (saved[key] = value));
    console.log(saved);
    modal.style.display = "none";
    form.reset();
    addBookToLibrary();
});

  addButton.onclick = function() {
    modal.style.display = "block";
  }

  closeButton.onclick = function() {
    modal.style.display = "none";
  }
  
  window.addEventListener("mousedown", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
  })


