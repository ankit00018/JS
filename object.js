//singleton 

//object literals

const mysum = Symbol("key1")

const JSuser = {
    name : "Ankit",
    email : "ankitspam05@gmail.com",
    [mysum] : "Ankit1",
    "full name " : "Ankit Kachhad",
    age : 21,
    location : "Ahmedabad"
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mysum]);

JSuser.email = "ankitspam06@google.com"
// Object.freeze(JSuser)

// JSuser.email = "ankitspam06@youtube.com"

// console.log(JSuser["email"]);


JSuser.welcome = function(){
    console.log("Welcome");    
}

JSuser.welcomeTwo = function(){
    console.log(`Welcome, ${this.name}`);    
}
console.log(JSuser.welcome());
console.log(JSuser.welcomeTwo());









