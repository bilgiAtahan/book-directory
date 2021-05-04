const express = require('express')
const router = express.Router();
const usercontroller = require('../../models/users-controller')
const books = require('../../books');
let booksDirectory = books;

router.get('/:id/add', (req, res) => {
    res.render('book/book-add', {
        id: req.params.id,
        username: usercontroller.getUsername(req.params.id)
    })
})

router.post('/:id/add', (req, res) => {
    const par = req.body
    booksDirectory.push(par)
    res.redirect('/user/' + Number(req.params.id))
})

module.exports = router;