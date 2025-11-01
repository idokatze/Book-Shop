'use strict'
onInit()

function onInit() {
    getBooks()
    render(gBooks)
}

function render(books) {
    var strHTMLs = books.map(
        (book) =>
            ` <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td class="actions">
                    <button class="details" onclick="displayModal('${book.id}', event)">Details</button>
                    <button class="update" onclick="onUpdateBook('${book.id}', event)">Update</button>
                    <button class="delete" onclick="onRemoveBook('${book.id}', event)">Delete</button>
                </td>
            </tr>`
    )

    document.querySelector('tbody').innerHTML = strHTMLs.join('')
}

function onRemoveBook(id, ev) {
    ev.stopPropagation()
    removeBook(id)
    render(gBooks)
}

function onUpdateBook(id, ev) {
    ev.stopPropagation()
    const newPrice = +prompt('Enter new price')
    if (newPrice !== 0) updatePrice(id, newPrice)
    render(gBooks)
}

function onAddBook() {
    const newBookName = prompt('Enter the title of the new book')
    const newBookPrice = +prompt('Enter the price of the new book')
    createBook({ title: newBookName, price: newBookPrice })
    render(gBooks)
}

function displayModal(id) {
    const currBook = gBooks.find((book) => id === book.id)
    const elBackdrop = document.querySelector('.backdrop')
    const elModalTitle = document.querySelector('.modal-title')
    const elModalInfo = document.querySelector('.modal-info')

    elBackdrop.classList.add('opaque')

    elModalTitle.innerText = currBook.title
    elModalInfo.innerText = JSON.stringify(currBook, null, 4)
}

function closeModal(event) {
    event.stopPropagation() 
    const elBackdrop = document.querySelector('.backdrop')
    elBackdrop.classList.remove('opaque')
}
