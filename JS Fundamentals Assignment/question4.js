//Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

let getEmailById = (id) => {
  for(let i=0; i<userEmails.length; i++){
    if(id == userEmails[i]["id"]){
      return userEmails[i]["email"];
    }
  }
}

let mergeById = (userNames,userEmails) => {
  let users = [];
  for(let i=0; i<userNames.length; i++){
    var obj = {};
    email = getEmailById(userNames[i]["id"]);
    obj.id = userNames[i]["id"];
    obj.first_name = userNames[i]["first_name"];
    obj.email = email;
    users.push(obj);
  }
  return users;
}

let userNames = [{
"id": 1,
"first_name": "Nicki",
}, {
"id": 2,
"first_name": "Raychel",
}, {
"id": 3,
"first_name": "Demetris",
}, {
"id": 4,
"first_name": "Amata",
}]

let userEmails = [{
"id": 2,
"email": "rmcgrady1@cpanel.net",
}, {
"id": 1,
"email": "ncrozier0@squarespace.com",
}, {
"id": 4,
"email": "abraiden3@canalblog.com",
}, {
"id": 3,
"email": "dkilshall2@elpais.com",
}]
 
console.log(mergeById(userNames, userEmails));