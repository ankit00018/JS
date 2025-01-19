class user {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password=password
    }

    encryptPassword (){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("Ankit","Ankit@gmail.com","13546")

console.log(chai.encryptPassword());
console.log(chai.changeusername());

// Behind To Scene

function User (username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeusername = function(){
    return`${this.username.toUpperCase()}`
}

const Tea = new User("Ankit","Ankit@gmail.com", "22123")

console.log(Tea.encryptPassword());
console.log(Tea.changeusername());
