const promiseOne = new Promise(function(resolve,reject){
     //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async Task is Oomplete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise Consumed"); 
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 3");
        resolve({
        username : "Ankit18",
        age : 18
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error = false
    if (!error) {
        resolve({username:"ankit18,age:18"})
    }
    else{
        console.log("Somthing went wrong");
    }
   },1000)
})

promiseFour.then( (user)=>{
    console.log(user);
    return user.username
} ).then( (username)=>{
    console.log(username); 
} ).catch(function(error){
    console.log(error);
}).finally( ()=> console.log("Promise is either resolved or rejected"))

