'use script'

var gHardCodedLibrary = [
    { title: 'Alice in Wonderland', price: 120 },
    { title: '1984', price: 100 },
    { title: 'The Lord of the Rings', price: 180 },
    { title: 'To Kill a Mockingbird', price: 90 },
    { title: 'The Great Gatsby', price: 110 },
]

var gBooks = []

function getBooks() {
    gHardCodedLibrary.forEach((book) => createBook(book))
}

function createBook(book) {
    const bookItem = {
        id: makeId(5),
        title: book.title,
        price: book.price,
        imgUrl: '',
    }

    gBooks.push(bookItem)
}

function removeBook(id) {
    const bookIdx = gBooks.findIndex((book) => book.id === id)
    if (bookIdx !== -1) gBooks.splice(bookIdx, 1)
}

function updatePrice(id, newPrice) {
    const bookIdx = gBooks.findIndex((book) => book.id === id)
    if (bookIdx !== -1) gBooks[bookIdx].price = newPrice
}
