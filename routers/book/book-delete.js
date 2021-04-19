const express = require('express')
const router = express.Router();
const books = require('../../books');
let booksDirectory = books;

router.get('/user/:id/delete', (req, res) => {
    res.render('book-delete', { id: req.params.id })
})

router.post('/user/:id/delete', (req, res) => {
    const par = req.body
    const index = booksDirectory.findIndex(b => b.isbn === par.isbn)
    delete booksDirectory[index]
    res.redirect("/")
})

module.exports = router;