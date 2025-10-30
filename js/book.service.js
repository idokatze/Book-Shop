'use script'

var gBooks = [
    { title: 'Alice in Wonderland', price: 120 },
    { title: '1984', price: 100 },
    { title: 'The Lord of the Rings', price: 180 },
    { title: 'To Kill a Mockingbird', price: 90 },
    { title: 'The Great Gatsby', price: 110 },
]

function getBooks() {
    return gBooks
}

function createBooks() {
    gBooks = gBooks.map((book) => createBook(book))
    return gBooks
}

createBooks()

function createBook(book) {
    const bookItem = {
        id: makeId(5),
        title: book.title,
        price: book.price,
        imgUrl: '',
    }
    return bookItem
}

function removeBook(id) {
    const bookIdx = gBooks.findIndex((book) => book.id === id)
    gBooks.splice(bookIdx, 1)
}

function updatePrice(id, newPrice) {
    const bookIdx = gBooks.findIndex((book) => book.id === id)
    gBooks[bookIdx].price = newPrice
}
