const express = require('express')
const router = express.Router();
const books = require('../books');
let booksDirectory = books;

router.get('/add',(req,res)=>{
    res.render('book-add')
})

router.post('/add',(req,res)=>{
    const par = req.body
    booksDirectory.push(par)
    res.redirect('/')
})

module.exports = router;