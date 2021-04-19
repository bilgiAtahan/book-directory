const Book = require('./book')
const books = require('../books')
class User {
    #id
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
    property() {
        return {id: '342342342342' , username: this.#username, password: this.#password }
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