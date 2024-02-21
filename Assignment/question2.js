// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
// let obj = {
//  a:”Apple”,
//  b:[“Basketball”,”Baseball”],
//  c: {
//   call: “cellphone”
//  },
//  d: “Dog”
// }
// filterObject(obj) //This should return {a:”Apple”, d:”Dog”}

const filterObject = (obj) => {
  let filteredObject = {}
  let entries = Object.entries(obj);
  for(let i=0; i<entries.length; i++){
    if (typeof entries[i][1] != "object"){
      filteredObject[entries[i][0]] = entries[i][1];
    }
  }
  return filteredObject;
}

let obj = {
  a:"Apple",
  b:["Basketball","Baseball"],
  c: {
   call: "cellphone"
  },
  d: "Dog"
}

console.log(filterObject(obj))
