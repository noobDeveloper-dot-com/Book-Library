let addBookModal = document.querySelector("[data-addBookModal]")  // The Big Yellow Add Book Button
     modalCard = document.querySelector("[data-modalCard]")       // The Modal
     inside_modalCard = document.querySelector("[data-inside_modalCard]")    
     closeBtn = document.querySelector("[data-closeBtn]")         // Close Button which is in the Modal

   //   inputs
    let modalInputs = document.querySelectorAll(".addBookInputs")

    const inputs = {
      authorVal : "",
      titleVal : "",
      nOPVal : ""
    } 



    modalInputs[0].addEventListener("change", e =>{ inputs.authorVal = modalInputs[0].value})
    modalInputs[1].addEventListener("change", e =>{ inputs.titleVal = modalInputs[1].value})
    modalInputs[2].addEventListener("change", e =>{ inputs.nOPVal = modalInputs[2].value})


    
 
 

 const modalBtns = {
   addBtn : document.querySelector("[data-addBtn]").addEventListener("click", addNewBookObj),
   resetBtn : document.querySelector("[data-resetBtn]").addEventListener("click", clearValuesInTextBox)
 }

 

addBookModal.addEventListener("click", e =>{
   modalCard.classList.toggle("visible")
   inside_modalCard.classList.toggle("visible")
})

closeBtn.addEventListener("click", e =>{
   modalCard.classList.remove("visible")
   inside_modalCard.classList.remove("visible")
})



let myLibrary = [];

function Book (author, title, numberOfPages){
   this.author = author;
   this.title = title;
   this.numberOfPages = numberOfPages;
}

function addNewBookObj(){
   // addBookToLibrary(new Book(inputs.authorVal.value, inputs.titleVal.value, inputs.nOPVal.value))
   let book = new Book(inputs.authorVal, inputs.titleVal, inputs.nOPVal)

   addBookToLibrary(book)
}

function clearValuesInTextBox (){
   const inputsValues = document.querySelectorAll(".addBookInputs")
                                .forEach(e =>{e.value = ""})
}


let bookNameInTheList = document.querySelector("[data-bookName]")

function addBookToLibrary(bookObj){
   myLibrary.push(bookObj)
   console.log(myLibrary, myLibrary.length)
   
}

// 

