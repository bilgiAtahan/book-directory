const express = require('express')
const router = express.Router();
const books = require('../books');
let booksDirectory = books;

router.get('/update', (req, res) => {
    res.render('book-update-search')
})

router.post('/update', (req, res) => {
    const isbn = req.body.isbn
    res.redirect('/update/'+isbn)
})

router.get('/update/:id', (req, res) => {
    const { id } = req.params
    const book_details = booksDirectory.find(b => b.isbn === id)
    res.render('book-update', {
        bookDetails: book_details
    })
})

router.post('/update/:id',(req,res)=>{
    const par = req.body
    booksDirectory.forEach(element => {
        if (element.isbn === par.ISBN) {
            element.title = par.name
            element.authors = par.authors
            element.pageCount = (Number)(par.page)
            element.categories = par.category
            element.publishedDate.$date = par.date
            element.longDescription = par.description
        }
    });
    res.redirect('/')
})

module.exports = router;