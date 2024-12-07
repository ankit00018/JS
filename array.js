const arr = [1,2,3,4]
 
// In array Copy Opearation copy references of array means shallow copy(like heap) not deep copy(copy array elements like stack)
 
const myarr = new Array(1,2,4,56)
//console.log(myarr);  

// arr.push(6)
// arr.pop()
// arr.unshift(7)
// arr.shift()

// console.log(arr.includes(2));
// console.log(arr.indexOf(3));

const arr2 = arr.join()
// console.log(typeof arr2);

// console.log("a",arr);
// const myarr2 =  arr.slice(1,3)
// console.log(myarr2);


// console.log("b",arr);
// const myarr3 = arr.splice(1,3)
// console.log(myarr3);
// console.log(arr);

// difference between slice and splice that slice is slice array in range-1 but splice also change main array elements.

const marvel_heors = ["ironman", "thor", "caption"]
const dc_heros = ["superman", "batman", "wonder"]

// marvel_heors.push(dc_heros)
// console.log(marvel_heors);

// const all_heroes = marvel_heors.concat(dc_heros)  // declare new variable to store concated array
// console.log(all_heroes);

// const all_new = [...marvel_heors, ...dc_heros]  // spread Operator 
// console.log(all_new);

const another_array = [1,2,4,[3,4],3,6,8,[36.383,9],8,6,3,[827,8238,9584]]
const real_array = another_array.flat(Infinity)
// console.log(real_array);

// console.log(Array.isArray("Ankit"));
// console.log(Array.isArray("Ankit"));
// console.log(Array.from("Ankit"));  // convert string to array 
// console.log(Array.from({name: "Ankit"})); // convert object to array but return empty array because we have to tell what value we want to convert key or value

let chem = 98
let phy = 91
let math = 99

// console.log(Array.of(chem, phy, math));




