const Book = require('./book')
const books = require('../books')
class User {
    #password
    #name
    #username
    #email
    #books = books
    constructor(name, username, email, password, book) {
        this.#name = name
        this.#username = username
        this.#email = email
        this.#password = password
        this.#books.push = book
    }
    property() {
        return { id: '342342342342', username: this.#username, password: this.#password, books: this.#books }
    }
    addBook(book) {
        const bookOfuser = new Book(book)
        books.push(bookOfuser)
    }
    getBooksOfUser(id) {
        if (id)
            return this.books;
        else
            return 202
    }
    getBook(id) {
        const index = this.#books.findIndex(book => book.isbn === id)
        return this.#books[index]
    }
}
module.exports = User