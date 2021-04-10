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


app.get('/', (req, res) => {
    res.redirect('/login')
});

app.use(bookAdd)
app.use(bookdelete)
app.use(bookupdate)

app.get('/login',(req, res) => {
    res.render('login')
});
app.post('/login', authCheck, (req, res) => {
    res.redirect('/' + req.body.id)
})
app.get('/:id',userCheck, (req, res) => {
    const user = users.getUser(req.params.id)
    const bookOfUser = users.getBooks(req.params.id)
    res.render('index', {
        user: user,
        books : bookOfUser
    })
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
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
function userCheck(req,res,next){
    const id = req.params.id
    if(users.getUser(id)){
        res.redirect('/login')
    }
    else
        res.send('couldnt find')
}

app.listen(3000)

