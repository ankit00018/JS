function addNum(number1, number2){
    return number1+number2
}

const result = addNum(56,54)
// console.log("Result :", result);

function loginMessage(username){   // You can pass default value for username
    if(!username){
        // console.log("Please Enter Username");
        return
    }
    // console.log(`${username} logged in`);    
}

// loginMessage("Ankit")


// Shoping Cart Example

function calCartValue(val1,val2, ...num1){  // rest operator
    return num1
}

// console.log(calCartValue(20,23,56,54));  // Explanation : val1 and val2 store 20,23 and rest of value store in num1 in array form

const user = {
    username: "ankit",
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);   
}

// we can pass object directly 

handleObject({
    username: "ankit",
    price : 200
})

// handleObject(user)

const myArray = [200,400,300,500]

function returnSecValue(getarray){
    return getarray[1]
}

// console.log( returnSecValue(myArray));
console.log(returnSecValue([100,200,300,400]));



//////  this and arrow function


const user1 = {
    username1 : "ankit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username1}, welcome to website`);
        console.log(this);
        
    }
}

user1.welcomeMessage()
user1.username1 = "Jeet"
user1.welcomeMessage()

console.log(this); // Empty object 


// function chai(){
//     console.log(this);  
// }

// function chai(){
//     const username2 = "ankit"
//     console.log(this.username2);     // this not working in function like that 
// }


// const chai = function(){
//     const username2 = "ankit"
//     console.log(this.username2);
// }

const chai = () => {                 // Arrow Function 
    let username2 = "ankit"
    console.log(this.username2);
}
// chai()

// Basic Arrow Function

// const addVal = (num1,num2) => {
//     return num1+num2
// }

// const addVal = (num1,num2) =>num1+num2  // Implisit way to declare function
 
// const addVal = (num1,num2) =>(num1+num2)  // another way for react learning

const addVal = (num1,num2) =>({username:"ankit"}) // for object return you have to write in ()

console.log(addVal(3,7));




// IIFE Function : Avoiding Global Scope Pollution   

(function coffee(){
    console.log(`DB Connected`);
})();                                                 // after every IIFE function close by ;

( (name)=>{
    console.log(`${name},DB Connected Two`);
} )("Ankit")