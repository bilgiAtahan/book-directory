const Book = require('./book')
const books = require('../books')
class User {
    #password
    #name
    #username
    #email
    constructor(name, username, email, password) {
        this.#name = name
        this.#username = username
        this.#email = email
        this.#password = password
    }
    get name() {
        return this.#name
    }
    get email() {
        return this.#email
    }
    get username() {
        return this.#username
    }
    get password() {
        return this.#password
    }

    addBook(book) {
        const bookOfuser = new Book(book)
        books.push(bookOfuser)
    }

}
module.exports = User