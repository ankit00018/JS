
const accountId = 34343
// let employeeName = "Ankit"
var employeeGender = "Male"
let accountState

// prefer not to use var because of issue in block scope and functional scope

// console.table([employeeName, employeeGender, accountId, accountState])

let score = "Ankit"   // NaN = not a number 
let valueIn =  Number(score)
// console.log(typeof valueIn, valueIn)

// console.log(valueIn);


                                                           // OPERATION

let x = 3;
const y = x++;

// console.log(x,y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(a,b);
// Expected output: "a:4, b:4"

const Marks = null

const MyScore = ["Physics","Chemistry","Biology"]

// console.log(typeof MyScore);

let Score = { 
    Name : "hitesh",
    age : 20,
 }


// console.log(typeof Score);

const MyFunction = function(){
    console.log("Hello World");
}

// console.log(typeof MyFunction);
// console.log(typeof Marks);

// const id = Symbol('123')
// console.log(id);


// null return type is object

// const bigNumber = 455223245465n
// console.log(typeof bigNumber);

const UserOne = {
    name:"Hitesh",
    email:"ankitkachad@gmail.com",
}


const UserTwo = {
    name:"Ankit",
    email:"ankitsoma005@gmail.com",
}

// Stack (Primitive) Heap(Non Primitive)  

UserTwo.email= "ankitsecond@gmail.com"
UserOne.email=UserTwo.email

// console.log(UserOne.email);
// console.log(UserTwo.email);

const gameName = new String('   Ankit-BCA')

const repo = "Ankit"
const stream = "BCA"

// console.log(`Hello My Name is ${repo} Currently I am in ${stream}`);


// console.log(gameName.trim());
// console.log(gameName.replace('BCA','msc'));
// console.log(gameName.split('-'));
// console.log(gameName.toLowerCase());

const maths = new Number(1000000)
// console.log(maths);

// console.log(maths.toString().length); 
// console.log(maths.toFixed(2));
// console.log(maths.toLocaleString('en-IN'));

// console.log(Math.abs(-5));
// console.log(Math.round(5.567));
// console.log(Math.ceil(5.567));
// console.log(Math.floor(5.567));
// console.log(Math.min(5,4,6,2));
// console.log(Math.random());

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max-min+1) + min));

let myDate = new Date()
// console.log(myDate.toLocaleString());

let newDate = new Date()
console.log(newDate.getFullYear());


let otherDate = new Date("12-21-2034")
console.log(otherDate.toLocaleString());







