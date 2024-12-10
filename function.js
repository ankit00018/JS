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

