let myLibrary = [];
 const newTitle= document.getElementById("new-title");
 const newAuthor= document.getElementById("new-author");
 const newPages= document.getElementById("new-pages");
 const newRead= document.getElementById("new-read");
 const modal = document.getElementById("modal");
 const addButton = document.getElementById("add");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


    function addBookToLibrary() {
        
      }

function submitForm() {
    myLibrary.push(new Book(newTitle.value,newAuthor.value,newPages.value,newRead.value));
  }

  addButton.onclick = function() {
    modal.style.display = "block";
  }

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  })
 
 



