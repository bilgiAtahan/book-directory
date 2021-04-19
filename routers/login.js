const express = require('express')
const router = express.Router();
const Users = require('../models/users')
const users = new Users();

router.get('/login',(req, res) => {
    res.render('login')
    return
});

router.post('/login', authCheck, (req, res) => {
    res.redirect('/user/' + req.body.id)
})

router.get('/user/:id', (req, res) => {
    const user = users.getUser(req.params.id)
    const bookOfUser = users.getBooks(req.params.id)
    res.render('index', {
        user: user,
        books : bookOfUser
    })
})

function authCheck(req, res, next) {
    const username = req.body.username
    const user = users.checkUser(username)
    if (user)
        if (user.password === req.body.password) {
            req.body = user
            next()
            return
        }
        else
            res.send('404')
   
}
module.exports = router;