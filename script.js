const myLibrary = [];

let saved = [];
let key = 0;
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
    createBook(key)
    key++;
}

function deleteBook(key) {
    delete myLibrary(key)
  }

  function readPercentage(key) {
    let x = (100 * +(myLibrary[key].read)) / +(myLibrary[key].pages)
    return Math.round(x);
 } 
  
function createBook(key) {
  bookShelf.insertAdjacentHTML('afterbegin', `
  <div class="book">
  <img src="book.png" alt="book" />
  <div class="book-text">
    <div class="name">${myLibrary[key].title}</div>
    <div class="author">${myLibrary[key].author}</div>
    <div class="pages">${myLibrary[key].pages} pgs</div>
  </div>
  <div class="book-status">
    <span class="read">${readPercentage(key)}%</span>
    <span class="material-symbols-outlined">Delete</span>
  </div>
</div>`
  );
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


