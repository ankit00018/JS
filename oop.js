//  const user = {
//     username : "ankit",
//     loginCount : 20,
//     signedIn : true,

//     getUserDetails : function(){
//         console.log("Get User Details from Database");
//         console.log(`username ${this.username}`);
//         console.log(this);   
//     }
//  }

//  console.log(user.username);
//  console.log(user.getUserDetails());
 
//  console.log(this);


function User (username,loginCount,signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Ankit",20,true)
const userTwo= new User("Karan",15,true)

console.log(userTwo);

console.log(userOne.constructor);



