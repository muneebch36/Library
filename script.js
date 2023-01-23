
let myLibrary = [];
let newTitle= "";
let newAuthor= "";
let newPages= "";
let newRead= "";

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.add = function() {
        return myLibrary.push(title,author,pages,read);
      }
    }

    function addBookToLibrary() {
        const newBook = new Book(newTitle,newAuthor,newPages,newRead);
        newBook.add;
      }

function submitForm(event) {
    event.preventDefault();
    newTitle= document.getElementById("new-title").value;
    newAuthor= document.getElementById("new-author").value;
    newPages= document.getElementById("new-pages").value;
    newRead= document.getElementById("new-read").value;
    addBookToLibrary();
  }



/* EighthGrader.prototype = Object.create(Student.prototype) */

