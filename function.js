function addNum(number1, number2){
    return number1+number2
}

const result = addNum(56,54)
console.log("Result :", result);

function loginMessage(username){   // You can pass default value for username
    if(!username){
        console.log("Please Enter Username");
        return
    }
    console.log(`${username} logged in`);    
}

loginMessage("Ankit")

