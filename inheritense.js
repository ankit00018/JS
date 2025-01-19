class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A New Course Added For ${this.username}`);
    }
}

const chai = new Teacher("Ankit","Ankit@gmail.com","123546")

chai.logMe()

const Tea = new user("Ankit Kachhad")

Tea.logMe()

console.log(chai instanceof Teacher);
