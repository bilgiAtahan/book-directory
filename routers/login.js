const express = require('express')
const router = express.Router();
const user = require('../models/users');

router.get('/', (req, res) => {
    res.render('login')
});

router.post('/', authenticate)

module.exports = router;

function authenticate(req, res, next) {
    user.authenticate(req.body)
        .then(user => user ? res.redirect("/user/" + user.id) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}
