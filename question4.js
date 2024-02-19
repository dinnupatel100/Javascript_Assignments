// 4. Declare a variable let arraySize = 25;. 
//Using a while loop, add numbers from one onwards into an array till the arraySize is reached.

let arraySize = 25;
let array = []

let i = 0;
while(i<arraySize){
  array[i] = i+1; 
  i++;
}

console.log(array)