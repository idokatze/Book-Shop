'use strict'
onInit()

function onInit() {
    getBooks()
    render()
}

function render(filter = '') {
    const booksToDisplay = getBooksToDisplay(filter)
    const elGrid = document.querySelector('.grid-body')

    var strHTMLs = booksToDisplay.map(
        (book) =>
            `<div class="grid-cell">${book.title}</div>
            <div class="grid-cell">$${book.price}</div>
            <div class="grid-cell grid-cell-details">
                <button class="details" onclick="displayModal('${book.id}', event)">Details</button>
            </div>
            <div class="grid-cell grid-cell-update">
                <button class="update" onclick="onUpdateBook('${book.id}', event)">Update Price</button>
            </div>
            <div class="grid-cell grid-cell-delete">
                <button class="delete" onclick="onRemoveBook('${book.id}', event)">Delete</button>
            </div>`
    )

    elGrid.innerHTML = strHTMLs.join('')
}

function onFilterBooks(searchText) {
    render(searchText)
}

function onRemoveBook(id, ev) {
    ev.stopPropagation()
    removeBook(id)
    render()
}

function onUpdateBook(id, ev) {
    ev.stopPropagation()
    const newPrice = +prompt('Enter new price')
    if (newPrice !== 0) updatePrice(id, newPrice)
    render()
}

function onAddBook() {
    const newBookName = prompt('Enter the title of the new book')
    const newBookAuthor = prompt(`Enter the author's name`)
    const newBookPrice = +prompt('Enter the price of the new book')
    const newBookImg = prompt('Enter the path to the cover artwork')
    createBook({
        title: newBookName,
        author: newBookAuthor,
        price: newBookPrice,
        imgUrl: newBookImg,
    })
    render()
}

function displayModal(id) {
    const elBackdrop = document.querySelector('.backdrop')
    elBackdrop.classList.add('opaque')

    const elModalInfo = document.querySelector('.modal-info')
    const elModalTitle = document.querySelector('.modal-title')

    const currBook = gBooks.find((book) => id === book.id)
    elModalTitle.innerHTML = `
  <span>${currBook.title}</span><br>
  <span class="book-author">${currBook.author}</span>
`
    console.log(elModalTitle.innerHTML)
    if (!currBook.imgUrl) {
        elModalInfo.innerText = JSON.stringify(currBook, null, 4)
    } else {
        elModalInfo.innerHTML = `<img src="${currBook.imgUrl}" alt="${currBook.title}">`
    }
}

function closeModal(event) {
    event.stopPropagation()
    const elBackdrop = document.querySelector('.backdrop')
    elBackdrop.classList.remove('opaque')
}
