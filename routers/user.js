const express = require('express')
const router = express.Router();
const bookAdd = require('./book/book-add')
const bookdelete = require('./book/book-delete')
const bookupdate = require('./book/book-update')
// const Users = require('../models/users')
// const users = new Users();

router.get('/:userId', (req, res) => {
    res.send('0202')

})
router.use(bookAdd)
router.use(bookdelete)
router.use(bookupdate)

module.exports = router;