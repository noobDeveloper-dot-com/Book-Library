const log = console.log;

let myLibrary = [];

// the constructor

function Book(titleVal, authorVal, pagesVal) {
  this.title = titleVal;
  this.author = authorVal;
  this.pages = pagesVal;
}

Book.prototype.readStatus = function (boolean) {
  this.read = boolean;
};

//main panel buttons

const openModalBtn = document.querySelector("[data-addBookModalBtn]");
gridListToggle = document.querySelector("[data-listGridView]");
lightDarkToggle = document.querySelector("[data-themeSwitcher]");
aboutBtn = document.querySelector("[data-about]");

//Selector

const addBookModal = document.querySelector("[data-addbookForm]"); //Book Modal
const blackOverlay = addBookModal.nextElementSibling; //Overlay
const bookList = document.querySelector(".bookList"); // ul

//Selects all Inputs that is inside Add Book Modal
const modalInputTextboxes = addBookModal.querySelectorAll("[data-modalInputs]");

//Buttons inside the modal

const closeBtn = document.querySelector("[data-closeBtn]"); //Selects the close button
newBookBtn = document.querySelector("[data-addBookBtn]"); //Selects the add Book button

//Events

openModalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
newBookBtn.addEventListener("click", addBook);
bookList.addEventListener("click", readAndDeleteToggle);

//Functions

function addBookToLibrary(newBookObj) {
  //A javascript function is a block of code designed to perform a particular task.
  //The function is executed when something invokes it.

  myLibrary.push(newBookObj); //push the new book obj to myLibrary array
  log(myLibrary, myLibrary.length);
}

function modalInputs() {
  //This function takes each input values and initialize to the variable.

  let titleVal = document.querySelector("#title").value,
    authorVal = document.querySelector("#author").value,
    noOfPagesVal = document.querySelector("#pages").value;
  readCB = document.querySelector("#readbookCB").checked;

  let newBook = new Book(titleVal, authorVal, noOfPagesVal); //Afterwards it passes the variables to the Book constructor to create a new book obj.
  newBook.readStatus(readCB);
  addBookToLibrary(newBook); //Passes the new book obj to addBookToLibrary function
  elements(newBook);
}

function elements(newBook) {
  //create Elements

  const book = document.createElement("li"); //Grand Parent Container
  bookInfo = document.createElement("div"); //Parent Container
  bookName = document.createElement("div");
  authorName = document.createElement("div");
  noOfPages = document.createElement("div");

  bookButtons = document.createElement("div"); //Parent Container
  deleteBook = document.createElement("a");
  readBtn = document.createElement("button");

  //Add classes

  book.classList.add("book");
  book.classList.add("flexB");

  bookInfo.classList.add("bookInfo");

  bookName.classList.add("bookName");
  authorName.classList.add("authorName");
  noOfPages.classList.add("noOfPages");

  bookButtons.classList.add("book-buttons");
  deleteBook.classList.add("deleteBook");
  readBtn.classList.add("readBtn");

  //Add Attributes

  deleteBook.setAttribute("href", "#");

  //Append to document

  bookList.appendChild(book);

  book.appendChild(bookInfo);

  bookInfo.appendChild(bookName);
  bookInfo.appendChild(authorName);
  bookInfo.appendChild(noOfPages);

  book.appendChild(bookButtons);

  bookButtons.appendChild(deleteBook);
  bookButtons.appendChild(readBtn);

  // Insert Context to elements
  bookName.innerText = newBook.title;
  authorName.innerText = newBook.author;
  noOfPages.innerText = newBook.pages;
  readBtn.innerText = "Read";
  log(newBook.read);

  //if the user have checked the checkBox then the readBtn bgcolor will be colored to green

  if (newBook.read) readBtn.classList.add("read");
}

function openModal() {
  //Opens Modal
  addBookModal.classList.add("active");
  blackOverlay.classList.add("active");
}

function closeModal() {
  //Closes Modal
  addBookModal.classList.remove("active");
  blackOverlay.classList.remove("active");
}

function addBook(ev) {
  ev.preventDefault(); //Disables the default event. Submit button has a default event of submitting data and reloading the page.

  modalInputs();

  addBookModal.reset(); // Resets the modal Values in the textbox
}

function readAndDeleteToggle(ev) {
  // This handles the functionality of Delete Button and Read Button

  // Deletes book
  if (ev.target.className === "deleteBook") {
    let li = ev.target.parentElement.parentElement;
    bookList.removeChild(li);
  }
  // Toggles for Read Button

  if (ev.target.innerText === "Read") {
    ev.target.classList.toggle("read");
  }
}
