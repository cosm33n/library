const addBtn = document.querySelector('#addBtn')
const cancelBtn = document.querySelector('#cancelBtn')
const saveBtn = document.querySelector(`#saveBtn`)

const form = document.querySelector(`#form`)
const overlay = document.querySelector(`#overlay`)

const bookTitle = document.querySelector('#bookTitle')
const bookAuthor = document.querySelector('#bookAuthor')
const bookPages = document.querySelector('#bookPages')

const booksContainer = document.querySelector('.books')
const bookRead = document.querySelector('#bookRead')

let myLibrary = []

form.addEventListener('submit', e => {
  e.preventDefault()
  addBookToLibrary()
  closeForm()
})

addBtn.addEventListener('click', () => {
  form.classList.add('active')
  overlay.classList.add('active')
})

overlay.addEventListener('click', closeForm)
cancelBtn.addEventListener('click', closeForm)

function closeForm() {
  form.classList.remove('active')
  overlay.classList.remove('active')
}

function Book(title, author, numPages) {
  this.title = title
  this.author = author
  this.pages = numPages
}

function addBookToLibrary() {
  const newBook = new Book(
    `${bookTitle.value}`,
    `${bookAuthor.value}`,
    `${bookPages.value}`
  )

  const newDiv = document.createElement(`div`)
  newDiv.classList.add(`unique-book`)
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')

  const status = document.createElement('span')
  const removeBtn = document.createElement('button')
  removeBtn.textContent = 'Remove Book'

  title.textContent = `Title: ${bookTitle.value}`
  author.textContent = `Author: ${bookAuthor.value}`
  pages.textContent = `Pages: ${bookPages.value}`

  status.textContent = `${bookRead.value === 'read' ? 'Read' : 'Unread'}`
  status.classList.add(`bookStatus`)

  status.addEventListener('click', () => {
    newDiv.classList.toggle('read')
    status.textContent = `${
      newDiv.classList.contains(`read`) ? 'Read' : 'Unread'
    }`
  })

  newDiv.appendChild(title)
  newDiv.appendChild(author)
  newDiv.appendChild(pages)
  newDiv.appendChild(removeBtn)
  newDiv.appendChild(status)

  booksContainer.appendChild(newDiv)
  myLibrary.push(newBook)

  myLibrary.forEach(book => {
    console.log(book)
  })

  removeBtn.addEventListener('click', () => {
    booksContainer.removeChild(newDiv)
  })
}
