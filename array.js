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

console.log("a",arr);
const myarr2 =  arr.slice(1,3)
console.log(myarr2);


console.log("b",arr);
const myarr3 = arr.splice(1,3)
console.log(myarr3);
console.log(arr);

// difference between slice and splice that slice is slice array in range-1 but splice also change main array elements.









 