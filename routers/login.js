const express = require('express')
const router = express.Router();
const user = require('./user')
const Users = require('../models/users')
const users = new Users();

router.get('/login', (req, res) => {
    res.render('login')
    return
});

router.use(user)


router.post('/login', authCheck, (req, res) => {
    res.redirect('/user/' + req.body.id)
})


function authCheck(req, res, next) {
    const username = req.body.username
    const user = users.checkUser(username)
    if (user)
        if (user.password === req.body.password) {
            req.body = user
            next()
            return
        } else
            res.send('404')

}
module.exports = router;