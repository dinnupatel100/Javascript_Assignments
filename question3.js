// 3. Declare a variable let arraySize = 25;. 
//Using a for loop, add numbers from one onwards into an array till the arraySize is reached.

let arraySize = 25;
let array=[];

for(let i=0; i<arraySize; i++){
  array[i] = i+1;
}

console.log(array)