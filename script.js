let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const library = document.querySelector(".library");
const form = document.querySelector(".book-form")
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read-check");
const submit = document.querySelector("#submit");

function displayLibrary() {

  removeElementsByClass("book-card");

  for(let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");
    const remove = document.createElement("div");

    library.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(remove);

    div.className = "book-card";
    title.className = "book-title";
    author.className = "book-author";
    pages.className = "book-pages"
    
    remove.className = "remove-button";
    remove.id = `${i}`;

    remove.addEventListener("click", function(e) {
      myLibrary.splice(i, 1);
      displayLibrary();
    })

    title.innerText = `${myLibrary[i].title}`;
    author.innerText = `${myLibrary[i].author}`;
    pages.innerText = `${myLibrary[i].pages} pages`;
    remove.innerHTML = `Remove`

    if (myLibrary[i].read) {
    read.className = "card-read"
    read.innerHTML = 'Read'
    } else {
    read.className = 'card-not-read'
    read.innerHTML = 'Not Read'
    }

    read.addEventListener("click", function(e) {
      if (myLibrary[i].read) {
        this.className = "card-not-read"
        this.innerHTML = "Not Read"
      } else {
        this.className = "card-read"
        this.innerHTML = "Read"
      }

      myLibrary[i].read = !myLibrary[i].read;
    })
  }
}

  submit.addEventListener("click", function() {
  const newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
  addBookToLibrary(newBook);
  displayLibrary();
  resetForm();
});

function resetForm() {
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  formRead.checked = false;
}

function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
  elements[0].parentNode.removeChild(elements[0]);
  }
}