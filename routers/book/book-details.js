const express = require('express');
const router = express.Router();
const booksDirectory = require('../../books');
const usercontroller = require('../../models/users-controller')

router.get('/:id/:isbn', (req, res) => {
    const book_details = booksDirectory.find(b => b.isbn === req.params.isbn)
    res.render('book/book-details', {
        bookDetails: book_details,
        id: req.params.id,
        username: usercontroller.getUsername(req.params.id)
    })
})

module.exports = router