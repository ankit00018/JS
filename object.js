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

const chem = {1: "a", 2: "b"}
const phy = {3: "c", 4: "d"}
const math = {5: "e", 6: "f"}

// const total = {chem, phy}

const total = Object.assign({}, chem, phy, math) // also use spread operator 
// console.log(total);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Json talk 

const course = {
    name : "Stop Overthinking",
    price : "799",
    Teacher : "Ankit Kachhad"
}

// course.Teacher

const {Teacher: sir} = course // if you do this then you do not have to use .dot for object 
// console.log(Teacher);
// console.log(sir)


// json demo 

// {
//     "name" : "Ankit",
//     "coursename" : "Stop Overthinking",
// }














