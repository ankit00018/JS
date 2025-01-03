// function asycFunc1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Some Data");
//             resolve("Success")
//         },3000)
//     })
// }

// function asycFunc2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Some Data");
//             resolve("Success")
//         },3000)
//     })
// }
// console.log("Fetching Data 1");
// asycFunc1().then((res)=>{
//     console.log("Fetching Data 2");
//     asycFunc2().then((res)=>{
//         console.log(res);
//     })
// })


// const getPromise = () => {
//      return new Promise( (resolve,reject)=>{
//         console.log("Promise Created");
//         // resolve("Success")
//         reject("Error");
//     } );
// };

// let promise = getPromise();
// promise.then( (res)=>{
//     console.log("Promise Resolve",res);
// } );

// promise.catch( (err)=>{
//     console.log("Reject ",err);
// } );

function getData (data,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Data",data);
            resolve("success")
            if(getNextData){
                getNextData()
            }
        },2000)
    } )
}

// Promise Chain 
 
// getData(1).then((res)=>{               // One way
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// })

// getData(1)
// .then((res)=>{
//     return  getData(2)
//     .then((res)=>{
//         console.log(res);
//     })
// })

// getData(1, ()=> {                       // Callback Hell
//     getData(2, ()=> {
//         getData(3)
//     })
// })

// Async Awaits 

// function api(){
//     return new Promise( (resolve,reject)=>{
//         setTimeout( ()=>{
//             console.log("Weather Data");
//             resolve(200)
//         },2000);
//     } );
// }

// async function getWeatherData(){
//     await api();
//     await api();
// }


(async function getAllData() {
    await getData(1)
    await getData(2)
    await getData(3)
})();