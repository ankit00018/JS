function setUserName(username){
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email=email
    this.password=password
}

const Ankit = new createUser("Ankit","ankitkachhad9@gmail.com","1234")
console.log(Ankit);
