const myLibrary = [];
const saved = [];
const modal = document.getElementById("modal");
const addButton = document.getElementById("add");
const submitForm = document.getElementById("submit-form");
const bookShelf = document.getElementById("book-shelf");
const closeButton = document.getElementsByClassName("close")[0];
const form = document.querySelector("form");
const deleteButton = document.querySelectorAll(".material-symbols-outlined");
const defaultToggle = document.getElementById("no-longer");
let newBooks = ""; //stores dynamically generated book nodelist so that it can be accessed in a function outside of the function it was updated in.


class Book {
  constructor(title, author, pages, read, like) {
      this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.like = like;
    }
}

defaultToggle.onclick = function () { //defualt book toggle function to avoid myLibrary object errors
  if (defaultToggle.innerText.includes(")")) {
    defaultToggle.innerText = "Me No Like :("
  } else {
    defaultToggle.innerText = "I Like :)"
  }
}

addButton.onclick = function() { //modal display + button
  modal.style.display = "block";
}

closeButton.onclick = function() { //close button on modal 
  modal.style.display = "none";
}

window.addEventListener("mousedown", (e) => { //close modal when clicking outside of it
  if (e.target === modal) {
      modal.style.display = "none";
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookForm = new FormData(form);

  bookForm.forEach((value,key) => (saved[key] = value)); //save form data into array
  
  if (saved.like === "on") { //change default values of checkbox
    saved.like = "I Like :)"
  } else saved.like = "Me No Like :("

  modal.style.display = "none";
  form.reset();
  addBookToLibrary(); 
});

myLibrary.prototype = Object.create(Book.prototype);

function addBookToLibrary() { //push saved form data array into myLibrary object
    myLibrary.push(new Book(saved.title,saved.author,saved.pages,saved.read,saved.like));
    placeBook();
}

function placeBook() { //gather all books that need to be placed from myLibrary
  resetShelf();
  myLibrary.map((book, index) => {
      createBook(index);
  });
}

function resetShelf () { //replace books in bookshelf to prevent duplicates as placeBook() doesnt interface with HTML.
  newBooks.forEach(newBook => {
    newBook.remove();
  });
}

document.addEventListener("DOMNodeInserted", function(){ //keeps an updated array of dynamically genereated books so that they can be targeted separately for deletion than default book.
  newBooks = document.querySelectorAll(".new-book");
});

function createBook(index) { //creates HTML content for books that need to be placed.
  
  bookShelf.insertAdjacentHTML('afterbegin', `
  <div class="new-book" id=${index}>
    <div class="book-cover">
      <div class="name">${myLibrary[index].title}</div>
      <div class="author">${myLibrary[index].author}</div>
      <div class="pages">${myLibrary[index].pages} pgs</div>
    </div>
  <img src="book.png" alt="book"/>
  <div class="book-status">
    <span class="read">${readPercentage(index)}%</span>
    <button class="toggle">${myLibrary[index].like}</button>
    <span class="material-symbols-outlined">Delete</span>
  </div>
</div>`
  );
}

function readPercentage(index) { 
  let x = (100 * +(myLibrary[index].read)) / +(myLibrary[index].pages)
  return Math.round(x);
} 

document.addEventListener("click", function(e){ //keeps an updated array of dynamically generated delete icons.
  const burnBook = (e.target.closest('.new-book'));
  const toggleButton = (e.target.closest(".toggle"));

  if(target = (e.target.closest(".material-symbols-outlined")) ){
        if (burnBook === null) { //delete default book
          (e.target.closest('.book')).remove();
        } else { //delete dynamically generated book
          myLibrary.splice((burnBook.id), 1);
          burnBook.remove();
          placeBook();
        }  
} else if (target = (e.target.closest(".toggle")) ){
        if (toggleButton.innerText.includes(")")) {
          toggleButton.innerText = "Me No Like :("
          myLibrary[(burnBook.id)].like = "Me No Like :("
        } else {
          toggleButton.innerText = "I Like :)"
          myLibrary[(burnBook.id)].like = "I Like :)"
        }
}
    });
  
  /*   if (checkDuplicate()) {
    alert("book exists");
} else {
  addBookToLibrary();
} */

/*   function checkDuplicate() {
    myLibrary.map((book,index) => {
      if (myLibrary.length > 1) {
        if (book.title === saved.title) {
          myLibrary.splice(index, 1);
        }
      } else return false;
    });
  } */