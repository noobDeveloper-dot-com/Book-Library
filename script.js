const log = console.log;

let myLibrary = []; 


function Book(titleVal, authorVal, pagesVal) {      
  // the constructor...
  this.title = titleVal;
  this.author = authorVal;
  this.pages = pagesVal;
}

Book.prototype.readStatus = function(boolean){
  this.read = boolean;
};

let isRead = false    // Set read value to "false" by default







//main panel buttons 

const openModalBtn = document.querySelector("[data-addBookModalBtn]")
      gridListToggle = document.querySelector("[data-listGridView]")
      lightDarkToggle = document.querySelector("[data-themeSwitcher]")
      aboutBtn = document.querySelector("[data-about]")




// Add Book Modal Selector

const addBookModal = document.querySelector("[data-addbookForm]")




//Selects all Inputs that is inside Add Book Modal
const modalInputTextboxes = addBookModal.querySelectorAll("[data-modalInputs]")


//Buttons inside the modal

const closeBtn = document.querySelector("[data-closeBtn]")  //Selects the close button 
      newBookBtn = document.querySelector("[data-addBookBtn]") //Selects the add Book button
      readCB = document.querySelector("#readbookCB") // Selects the read checkbox


//Overlay

const blackOverlay = addBookModal.nextElementSibling


//Selector

const bookList = document.querySelector(".bookList")


//Events

openModalBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)
newBookBtn.addEventListener("click", addBook)





//Functions

function addBookToLibrary(newBookObj) {      //A javascript function is a block of code designed to perform a particular task.
  // do stuff here                           //The function is executed when something invokes it.
  
  myLibrary.push(newBookObj);  //push the new book obj to myLibrary array
  log(myLibrary, myLibrary.length)
}


function modalInputs(){        //This function takes each input values and initialize to the variable.  

let titleVal = document.querySelector("#title").value,
    authorVal= document.querySelector("#author").value,
    noOfPagesVal= document.querySelector("#pages").value,

    newBook = new Book(titleVal, authorVal, noOfPagesVal) //Afterwards it passes the variables to the Book constructor to create a new book obj.
    newBook.readStatus(isRead)
    addBookToLibrary(newBook) //Passes the new book obj to addBookToLibrary function
    elements(newBook)
}



function elements(newBook){

  //create Elements

  const book = document.createElement("li")        //Grand Parent Container
        bookInfo = document.createElement("div")   //Parent Container
        bookName = document.createElement("div")
        authorName = document.createElement("div")
        noOfPages = document.createElement("div") 

        bookButtons = document.createElement("div") //Parent Container
        deleteBook = document.createElement("a")
        readToggle = document.createElement("div")  //Child Container of bookButtons
        checkBox = document.createElement("input")
        label = document.createElement("label")


 //Add classes

        book.classList.add("book")
        book.classList.add("flexB")

        bookInfo.classList.add("bookInfo")

        bookName.classList.add("bookName")
        authorName.classList.add("authorName")
        noOfPages.classList.add("noOfPages")

        bookButtons.classList.add("book-buttons")
        deleteBook.classList.add("deleteBook")
        readToggle.classList.add("readToggle")

 //Add Attributes

        deleteBook.setAttribute("href", "#")
        
        checkBox.setAttribute("type", "checkbox")
        checkBox.setAttribute("name", "read")
        checkBox.setAttribute("id", "read")

        label.setAttribute("for", "read")

//Append to document

bookList.appendChild(book)

book.appendChild(bookInfo)

bookInfo.appendChild(bookName)
bookInfo.appendChild(authorName)
bookInfo.appendChild(noOfPages)

book.appendChild(bookButtons)

bookButtons.appendChild(deleteBook)
bookButtons.appendChild(readToggle)

readToggle.appendChild(checkBox)
readToggle.appendChild(label)

       
// Insert Context to elements
  bookName.innerText = newBook.title
  authorName.innerText = newBook.author
  noOfPages.innerText = newBook.pages
  label.innerText = "Read"
  log(newBook.read)



}





function openModal(ev){                 //Opens Modal
  addBookModal.classList.add("active")
  blackOverlay.classList.add("active")
}

function closeModal(ev){               //Closes Modal
  addBookModal.classList.remove("active")
  blackOverlay.classList.remove("active")
}





function addBook(ev){
  ev.preventDefault()   //Disables the default event. Submit button has a default event of submitting data and reloading the page.
  
  readCB.addEventListener("change", isReadOrNot) // Add event listener to the read CheckBox

  function isReadOrNot(ev){
    
    if(this.checked){ 
      isRead = this.checked;
    }
  
  }

  modalInputs()    

  addBookModal.reset();  // Resets the modal Values in the textbox
}


 




