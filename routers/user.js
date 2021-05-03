const express = require('express')
const router = express.Router();
const bookAdd = require('./book/book-add')
const bookdelete = require('./book/book-delete')
const bookupdate = require('./book/book-update')
const usercontoller = require('../models/users-controller')

router.get('/:userId', (req, res) => {
    const a = usercontoller.getUser(req.params.userId)
    res.render('index', {
        id: a.id,
        username: a.username,
        books: a.books
    })
})
router.use(bookAdd)
router.use(bookdelete)
router.use(bookupdate)

module.exports = router;