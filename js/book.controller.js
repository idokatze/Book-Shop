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
                    <button class="read" onclick="displayModal('${book.id}', event)">Read</button>
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
    updatePrice(id, newPrice)
    render(gBooks)
}

function onAddBook() {
    const newBookName = prompt('Enter the title of the new book')
    const newBookPrice = +prompt('Enter the price of the new book')
    createBook({ title: newBookName, price: newBookPrice })
    render(gBooks)
}
