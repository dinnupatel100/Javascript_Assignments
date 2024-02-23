//6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.


const newPromise = ()=>{
  return new Promise((resolve,reject)=>{
    fetch("https://reqres.in/api/users")
    .then((res)=>{
      if(!res.ok){
        throw new Error(response.status);
      }
      return res.json();
    }).then((data)=>{
      setTimeout(()=>{
        resolve(data)
      },2000);
    })
    .catch((error)=>{
      reject(error)
    })
  })
}

newPromise()
.then((res)=>{
  console.log("fetched data : ",res);
}).catch((error)=>{
  console.log("Error : ",error);
})