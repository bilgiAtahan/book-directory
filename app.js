const express = require('express')
const app = express()
const bookAdd = require('./routers/book-add')
const bookdelete = require('./routers/book-delete')
const bookupdate = require('./routers/book-update')
const login = require('./routers/login')
const register = require('./routers/register')
const Users = require('./models/users')
const users = new Users();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.redirect('/login')
});

app.use(login)
app.use(register)
app.use(bookAdd)
app.use(bookdelete)
app.use(bookupdate)

app.listen(3000)

