for(let i=1; i<=10; i++){
    // console.log(i);
    for(let j=1; j<=10; j++){
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArray = ["ironman","thor","hulk"]

for(let i=0; i<myArray.length; i++){
    const element = myArray[i]
    // console.log(element);
}


for(let i=0; i<=10; i++){
    if(i==4){
        // console.log("Detected 4");
        break
    }
    // console.log(i);
}

for(let i=0;i<=10; i++){
    if(i==5){
        // console.log("Detected 5");
        continue
    }
    // console.log(i);   

}
 
// while loop


let i=0
while(i<=10){
    // console.log(i);
    i++
}

const myarray = ["superman", "Batman", "flash"]
let arr=0
while(arr<myarray.length){
    // console.log(myarray[arr]);
    arr++
}

score = 11

do{
    // console.log(score);
    score++
}while(score<=10)


// for of loop

const arr1 = [1,2,3,4,5]

for (const i of arr1) {
    // console.log(i);
}

// map 

const map = new Map()

map.set('IN',"India")
map.set('US',"United State")
map.set('UK',"United Kingdom")
map.set('Fr',"France")

// console.log(map);

for(const [key,value] of map){
    // console.log(key,value);
}

// const myObject = {
//     name : "Ankit",
//     age : 20
// }

// for(const [key,value] of myObject){      // Object is not iterable thorugh for of loop 
//     console.log(key,value);
// }


// For in Loop

const myLang = {
    name: "py",
    for : "Scripting",
    with : "PVM"
}

for(const key in myLang){
    // console.log(`${key} shortcut is for ${myLang[key]}`)
}

const coding  = ["js","py","cpp","c++"]

for(const key in coding){
    // console.log(coding[key]);
}

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
    
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item,index,arr);
// } )

const myCoding = [
    {
        name: "Ankit",
        age: 20
    },
    {
        name: "Jeet",
        age: "19"
    },
    {
        name: "Karan",
        age: 25
    }
]

myCoding.forEach( (item)=>{
    console.log(item.name); 
} )

