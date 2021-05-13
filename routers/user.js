const express = require('express')
const router = express.Router();
const bookAdd = require('./book/book-add')
const bookdelete = require('./book/book-delete')
const bookupdate = require('./book/book-update')
const bookdetails = require('./book/book-details')
const usercontroller = require('../models/users-controller')

router.get('/:userId', (req, res) => {
    const user = usercontroller.getUser(req.params.userId)
    res.render('index', {
        id: user.id,
        username: user.username,
        books: user.books
    })
})
router.use(bookAdd)
router.use(bookdelete)
router.use(bookupdate)
router.use(bookdetails)
module.exports = router;