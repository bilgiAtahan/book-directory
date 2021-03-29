const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const books = require('./books');
let booksDirectory = books;

app.get('/', (req, res) => {
    res.render('index', { booksDirectory: booksDirectory })
});

app.get('/delete', (req, res) => {
    res.render('book-delete')
})
app.get('/update', (req, res) => {
    res.render('book-update-search')
})
app.get('/add',(req,res)=>{
    res.render('book-add')
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    if(id){
        const book_details = booksDirectory.find(b => b.isbn === id)
        res.render("book-details", { bookDetails: book_details })
    }
})


app.post("/", (req, res) => {
    const par = req.body
    if (req.body.delete === '') {
        const index = booksDirectory.findIndex(b => b.isbn === par.isbn)
        delete booksDirectory[index]
        console.log(par)
        res.redirect("/")
    }
    else if (req.body.update === '') {
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
    }
    else if(req.body.add === ''){
        delete par.add
        booksDirectory.push(par)
        res.redirect('/')
    }
})

app.post('/update', (req, res) => {
    const isbn = req.body.isbn
    const book_details = booksDirectory.find(b => b.isbn === isbn)
    res.render('book-update', {
        bookDetails: book_details,
    })
})

app.listen(3000)
