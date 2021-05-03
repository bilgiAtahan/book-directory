const express = require('express')
const router = express.Router();
const books = require('../../books');
let booksDirectory = books;

router.get('/:id/add', (req, res) => {
    res.render('book/book-add', { id: req.params.id })
})

router.post('/:id/add', (req, res) => {
    const par = req.body
    booksDirectory.push(par)
    res.redirect('/')
})

module.exports = router;