for(let i=1; i<=10; i++){
    console.log(i);
    for(let j=1; j<=10; j++){
        console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArray = ["ironman","thor","hulk"]

for(let i=0; i<myArray.length; i++){
    const element = myArray[i]
    console.log(element);
}


for(let i=0; i<=10; i++){
    if(i==4){
        console.log("Detected 4");
        break
    }
    console.log(i);
}

for(let i=0; i<=10; i++){
    if(i==5){
        console.log("Detected 5");
        continue
    }
    console.log(i);
    
}