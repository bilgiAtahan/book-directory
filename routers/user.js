const express = require('express')
const router = express.Router();
const bookAdd = require('./book-add')
const bookdelete = require('./book-delete')
const bookupdate = require('./book-update')
const Users = require('../models/users')
const users = new Users();

router.get('/user/:id', (req, res) => {
    const user = users.getUser(req.params.id)
    const bookOfUser = users.getBooks(req.params.id)
    res.render('index', {
        user: user,
        books: bookOfUser,
        id: req.params.id
    })
})

router.use(bookAdd)
router.use(bookdelete)
router.use(bookupdate)

module.exports = router;