// 3. What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () =>{
  return new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) {
      resolve('Test Resolve');
    } else {
      reject('Test Reject');
    }
  }).catch((err) =>{
    //catch executes when value is less than 5 and testAsyncFunction returns it as resolve
    console.log('Error caught in testAsyncFunction: ', err);
  });
};

testAsyncFunction()
   //then will execute both the time but when value is greater than 0.5 it will print 'Test Resolve' otherwise undefined
  .then((res) =>{
    console.log('Response in then block: ', res);
  })//this catch will never run
  .catch((err) => console.log('Error in catch block: ', err));

  