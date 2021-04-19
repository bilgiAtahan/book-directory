const User = require('./user-account')
class Users extends User {
    users = [{ id: '569897854235', username: '', password: '' }]
    openAccount(user) {
        const newuser = new User(user.name, user.username, user.email, user.password)
        this.users.push(newuser.property())
        console.log(this.users)
    }
    checkUser(username) {
        const index = this.users.find(element => element.username === username)
        console.log(this.users)
        if (index)
            return index
        else
            return false
    }
    getUser(id) {
        const index = this.users.find(element => element.id === id)
        if (index)
            return index
        else
            return false
    }



}
module.exports = Users