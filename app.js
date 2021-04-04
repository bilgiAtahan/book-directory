const express = require('express')
const app = express()
const bookAdd = require('./routers/book-add')
const bookdelete = require('./routers/book-delete')
const bookupdate = require('./routers/book-update')

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const books = require('./books');
let booksDirectory = books;

app.get('/', (req, res) => {
    res.render('index', { booksDirectory: booksDirectory })
});

app.use(bookAdd)
app.use(bookdelete)
app.use(bookupdate)

app.get('/:id', (req, res) => {
    const { id } = req.params
    if(id){
        const book_details = booksDirectory.find(b => b.isbn === id)
        // res.render("book-details", { bookDetails: book_details })
    }
})

app.listen(3000)
