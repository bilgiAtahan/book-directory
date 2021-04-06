const User = require('./user-account')
class Users {
    users = [{username:'bilgi',password:'1234'}]
    openAccount(user) {
        const newuser = new User(user.name, user.username, user.email, user.password)
        this.users.push(user)
    }
    checkUser(username){
        const index =this.users.find(element => element.username === username)
        if(index)
            return index.password
        else
            return false
    }
}
module.exports=Users
