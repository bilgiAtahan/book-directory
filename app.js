const express = require('express')
const app = express()
const login = require('./routers/login')
const register = require('./routers/register')
const user = require('./routers/user')

const Users = require('./models/users')
// const users = new Users();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.redirect('/login')
});

app.use("/login", login)
app.use(register)
app.use('/user', user)

app.listen(3000)