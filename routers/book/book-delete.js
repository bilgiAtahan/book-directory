const express = require('express')
const router = express.Router();
const usercontroller = require('../../models/users-controller')
const books = require('../../books');
let booksDirectory = books;

router.get('/:id/delete', (req, res) => {
    res.render('book/book-delete', {
        id: req.params.id,
        username: usercontroller.getUsername(req.params.id)
    })
})

router.post('/:id/delete', (req, res) => {
    const par = req.body
    const index = booksDirectory.findIndex(b => b.isbn === par.isbn)
    delete booksDirectory[index]
    res.redirect("/")
})

module.exports = router;