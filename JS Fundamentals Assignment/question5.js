// Write a function to filter an array of strings to hold only unique values

let filteruniqueNames = (names) => {
  uniqueNames = names.filter((value,index,array)=> array.indexOf(value)===index);
  return uniqueNames;
}

let names = ["Dinesh","Yash","Dinesh","Sanjay","Yash"];
console.log(filteruniqueNames(names));

