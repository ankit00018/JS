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
// console.log(JSuser["email"]); // Mostly use 
// console.log(JSuser["full name"]);
// console.log(JSuser[mysum]);

JSuser.email = "ankitspam06@google.com"
// Object.freeze(JSuser)

// JSuser.email = "ankitspam06@youtube.com"

// console.log(JSuser["email"]);


JSuser.welcome = function(){
    // console.log("Welcome");    
}

JSuser.welcomeTwo = function(){
    // console.log(`Welcome, ${this.name}`);    
}
// console.log(JSuser.welcome());
// console.log(JSuser.welcomeTwo());

// object part 2 
// singlton 

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = 1
tinderUser.email = "random@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
        fullname : {
            Username : {
                firstname : "Ankit",
                lastname : "Kachhad"
            }
        }
}

// console.log(regularUser.fullname.Username.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}

const obj4 = Object.assign{{}, obj1, obj2, obj3}











