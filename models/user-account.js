const Book = require('./book')
const books = require('../books')
class User {
    #password
    #name
    #username
    #email
    #books = [books]
    constructor(name, username, email, password, book) {
        this.#name = name
        this.#username = username
        this.#email = email
        this.#password = password
        this.#books.push = book
    }
    addBook(book) {
        const bookOfuser = new Book(book)
        books.push(bookOfuser)
    }
    getBooks(id) {
        if (id)
            return books
        else
            return 202
    }
}
module.exports = User