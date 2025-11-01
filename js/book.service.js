'use script'

var gHardCodedLibrary = [
    {
        title: 'Alice in Wonderland',
        author: 'Lewis Carroll',
        price: 120,
        imgUrl: 'img/AliceInWonderland.jpg',
    },
    {
        title: '1984',
        author: 'George Orwell',
        price: 100,
        imgUrl: 'img/1984.jpg',
    },
    {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        price: 180,
        imgUrl: 'img/LordOfTheRings.jpg',
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 90,
        imgUrl: 'img/ToKillAMockingbird.jpg',
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 110,
        imgUrl: 'img/TheGreatGatsby.jpg',
    },
]

var gBooks = []

function getBooks() {
    gHardCodedLibrary.forEach((book) => createBook(book))
}

function createBook(book) {
    const bookItem = {
        id: makeId(5),
        title: book.title,
        author: book.author,
        price: book.price,
        imgUrl: book.imgUrl,
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
