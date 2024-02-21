let a;
console.log("Before assignment ",a)
a = 18;
console.log("After assignment ",a)

// const b;  - cannot declare without initialization
const b = 19
console.log("Const Value",b)

// typeof
let title = "XYZ"
let age = 25
let arr = [1,2,3]
let obj = {
  name: "Dinesh",
  gender: "Male"
}
let value = null
console.log("Title type:",typeof title);
console.log("Age type:",typeof age);
console.log("arr type:",typeof arr);
console.log("obj type:",typeof obj);
console.log("value type:",typeof value);
console.log("is array",arr instanceof Array);


/* Use let and const to create arrays and objects. Try modifying, deleting properties 
within the array or object. What do you expect to happen in both cases? 
What actually happens in both cases. 
What is the difference between an object declared as a let or a const variable?*/

let array = [1,2,3,4,5,6];
console.log("Before push: ",array);
array.push(7,8,9);//add element at first
console.log("After push: ",array);
array.pop();//remove element from last
console.log("After pop: ",array);
array.unshift(10,11,12) // add element at first
array.shift() // remove element from first
array.splice(1,2) // remove 2 elements from 1st index

const array2 = [1,2,3]
array2.push(4)
//array2 = [6,7,8]  - Reassignment of array is not allowed when we use const 
console.log("Array 2 : ",array2)

let object = {
  name: "Yash",
  address: "XYZ",
  pincode: 411017 
}
object.age = 17 // adding property
delete object.address //deleting property
console.log(object)

// When we declared object as let we can perform all the operation and reassignment is allowed while 
// reassignment is not allowed when we declare object as const 