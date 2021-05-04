const express = require('express')
const router = express.Router();
const usercontroller = require('../../models/users-controller')
const books = require('../../books');
let booksDirectory = books;

router.get('/:id/update', (req, res) => {
    res.render('book/book-update-search', {
        id: req.params.id,
        username: usercontroller.getUsername(req.params.id)
    })
})

router.post('/:id/update', (req, res) => {
    const isbn = req.body.isbn
    const id = Number(req.params.id)
    res.redirect('/user/' + id + '/update/' + isbn)
})

router.get('/:id/update/:isbn', (req, res) => {
    const book_details = booksDirectory.find(b => b.isbn === req.params.isbn)
    res.render('book/book-update', {
        bookDetails: book_details,
        id: req.params.id,
        username: usercontroller.getUsername(req.params.id)
    })
})

router.post('/:id/update/:isbn', (req, res) => {
    const par = req.body
    booksDirectory.forEach(element => {
        if (element.isbn === par.ISBN) {
            element.title = par.name
            element.authors = par.authors
            element.pageCount = (Number)(par.page)
            element.categories = par.category
            element.publishedDate.$date = par.date
            element.longDescription = par.description
        }
    });
    res.redirect('/user/' + Number(req.params.id))
})

module.exports = router;