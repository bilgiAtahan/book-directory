const express = require('express')
const router = express.Router();
const books = require('../books');
let booksDirectory = books;

router.get('/user/:id/add', (req, res) => {
    res.render('book-add')
        // res.send('add')
})

router.post('/add', (req, res) => {
    const par = req.body
    booksDirectory.push(par)
    res.redirect('/')
})

module.exports = router;