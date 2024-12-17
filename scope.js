let a = 300
var b = 30
// const c = 100

if(true){
    let a = 0
    var b = 3
    // const c = 10
    // console.log(a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Ankit"
    // console.log("Ankit");

    function two(){
        const website = "JobHub"
        console.log(username);
    }

    // console.log(website); not defined error because of  block scope level
    
    // two()
}

// one()


// console.log(addOne(5))  // if we call this function above function declaration then this function run and no error
function addOne(num){   // remember syntax
    return num + 1
}



// console.log(addTwo(5)) // if we declare function like this then call above declaration then give error
const addTwo = function(num){    // remember function syntax
    return num + 2
}


    
