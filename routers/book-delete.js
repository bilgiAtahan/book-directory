const express = require('express')
const router = express.Router();
const books = require('../books');
let booksDirectory = books;

router.get('/delete', (req, res) => {
    res.render('book-delete')
})

router.post('/delete', (req, res) => {
    const par = req.body
    const index = booksDirectory.findIndex(b => b.isbn === par.isbn)
    delete booksDirectory[index]
    res.redirect("/")
})

module.exports = router;