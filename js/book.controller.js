'use strict'
onInit()

function onInit() {
    render(gBooks)
}

function render(books) {
    var strHTMLs = books.map(
        (book) =>
            ` <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td class="actions">
                    <button class="read" onclick="displayModal('${book.id}')">Read</button>
                    <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
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
