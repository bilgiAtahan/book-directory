const express = require('express')
const app = express()
const bookAdd = require('./routers/book-add')
const bookdelete = require('./routers/book-delete')
const bookupdate = require('./routers/book-update')
const Users = require('./models/users')
const users = new Users();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const books = require('./books');
let booksDirectory = books;

app.get('/', (req, res) => {
   res.redirect('/login')
});

app.use(bookAdd)
app.use(bookdelete)
app.use(bookupdate)

app.get('/login', (req, res) => {
    res.render('login')
});
app.post('/login',authCheck,(req,res)=>{
    res.send('Succesfull')
})
app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',(req,res)=>{
    users.openAccount(req.body)
    res.redirect('/login')
})

// app.get('/:id', (req, res) => {
//     const { id } = req.params
//     if(id){
//         const book_details = booksDirectory.find(b => b.isbn === id)
//         res.render("book-details", { bookDetails: book_details })
//     }
// })
function authCheck(req,res,next){
    const username = req.body.username
    if(users.checkUser(username))
        if(users.checkUser(username) === req.body.password)
            next()
        else
            res.send('404')     
}
app.listen(3000)
