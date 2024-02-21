// 1. What is the difference between ++i and i++?

// 2. What do you think would happen if you pass an index beyond the range of the string? 
//Or if you pass a negative index? Try it out.

// 3. Do you think JSON.stringify would work for arrays as well? 
//What about nested objects? 
//What happens if we pass numbers, strings, undefined, null to JSON.stringify?

// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? 
//What will happen if such an invalid function runs in the program? 
//Will other parts of the code execute correctly after that?

// 1)=> ++i will first increment the value then return the value while
// => i++ will first return the value then increment
let i=0;
console.log(++i);
console.log(i++);

//2 ==>
let name = "josh"
console.log(name[-1]);  // it will return undefined
console.log(name[6]);  // undefined

//3 ==> JSON.stringify is used to store the objects as string. It will also works for array.
// it will also stringify the nested objects
let arr = [1,2,3]
arrJson = JSON.stringify(arr);

const obj = { marks: {science:97,maths:90}};
objJson = JSON.stringify(obj);

//What happens if we pass numbers, strings, undefined, null to JSON.stringify?
// => it will work fine for numbers,strings and null but it will not work for  undefined

let testJson = JSON.stringify(89);
testJson = JSON.stringify("josh");
testJson = JSON.stringify(null);
testJson = JSON.stringify(undefined);
console.log(typeof testJson);

//4. ==> When we pass invalid value to JSON.parse() it will throw error "not defined"
// it will not execute the further code
const obj1 = JSON.parse(josh); // it will throw an error
console.log(typeof obj1)