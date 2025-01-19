let myname = "   ankit   "
// console.log(myname.trueLenght);

let myHeros = ["thor","Ironman"]

let heroPower = {
    thor : "Hammer",
    ironman:"Suits",

    getIronmanPower: function(){
        console.log(`Ankit power is his ${this.ironman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Ankit Available In all Memories`);
}

Array.prototype.helloAnkit = function(){
    console.log(`Hello Ankit`);
}

// myHeros.hitesh()
// heroPower.hitesh()
// myHeros.helloAnkit()

const user = {
    name : "ankit",
    age : 34
}

const Teacher =  {
    makevideo : true
}

const teacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS",
    fulltime : true,
    __proto__ : teacherSupport
}

Teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(teacherSupport,Teacher)

let anotherName = "Chai Aur Code"

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True Lenght is ${this.trim().length}`);
}

anotherName.trueLenght()
myname.trueLenght()