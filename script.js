const log = console.log;

let myLibrary = [];


function Book(titleVal, authorVal, pagesVal) {
  // the constructor...
  this.title = titleVal;
  this.author = authorVal;
  this.pages = pagesVal;
}





function addBookToLibrary(newBookObj) {
  // do stuff here
  
  myLibrary.push(newBookObj);
  log(myLibrary, myLibrary.length)
}


function modalInputs(){ 

let titleVal = document.querySelector("#title").value,
    authorVal= document.querySelector("#author").value,
    noOfPagesVal= document.querySelector("#pages").value,

    newBook = new Book(titleVal, authorVal, noOfPagesVal)
  
    addBookToLibrary(newBook)
}


//main panel buttons 

const openModalBtn = document.querySelector("[data-addBookModalBtn]")
      gridListToggle = document.querySelector("[data-listGridView]")
      lightDarkToggle = document.querySelector("[data-themeSwitcher]")
      aboutBtn = document.querySelector("[data-about]")




// Add Book Modal Selector

const addBookModal = document.querySelector("[data-addbookForm]")




//Selects all Inputs that is inside Add Book Modal
const modalInputTextboxes = addBookModal.querySelectorAll("[data-modalInputs]")


//Buttons

const closeBtn = document.querySelector("[data-closeBtn]")
      readBtn = document.querySelector("[data-readToggle]")
      newBookBtn = document.querySelector("[data-addBookBtn]")


// Black Overlay Selector

const blackOverlay = addBookModal.nextElementSibling



//Events

openModalBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)
newBookBtn.addEventListener("click", addBook)




//Functions

function openModal(ev){                 //Opens Modal
  addBookModal.classList.add("active")
  blackOverlay.classList.add("active")
}

function closeModal(ev){               //Closes Modal
  addBookModal.classList.remove("active")
  blackOverlay.classList.remove("active")
}

function readBooleanToggle(ev){
  log("hi")
}



function addBook(ev){
  ev.preventDefault()   //Disables the default event. Submit button has a default event of submitting data and reloading the page.

  let isRead = false    // Set read value to "false" by default

  const readCB = document.querySelector("#readbookCB") // Selects the read checkbox

  readCB.addEventListener("change", isReadOrNot) // Add event listener to the read CheckBox
  
  function isReadOrNot(ev){
    
    if(this.checked){
      isRead = true;
    }

  }


  Book.prototype.readStatus = function(boolean){
    this.read = boolean;
  };

 


  modalInputs()    

  addBookModal.reset();  // Resets the modal Values in the textbox
}


 




