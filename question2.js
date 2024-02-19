// 2. What makes a method mutating or non mutating in Javascript? 
// Find out whether each of the following methods are mutating or non-mutating.
// How can you verify this?:
// push
// pop
// filter
// find
// sort
// map

// ===== mutating methods modify the original array
//push and pop - mutating method, adds and remove the element in the original array
let arr = [1,2];
arr.push(3,4,5); // [1,2,3,4,5]
arr.pop(); //[1,2,3,4]

//sort - it will sort the original array
let nums = [78,19,12,89]
nums.sort();
console.log(nums) // [12,19,78,89]

// ===== non mutating method returns new array instead of modifying the original array
// filter - it filter the array based on condition and returns new array

let evenNumbers = arr.filter( (x) => x%2==0 );
console.log(evenNumbers); // [2,4]

//find - it will return the first element in the array which satisfy the condition.
let find = arr.find( (x) => x%2==0);
console.log(find); // 2

//map - it will returns the new array with all the changed values
let mapArray = nums.map( (x) => x*2);
console.log(mapArray);