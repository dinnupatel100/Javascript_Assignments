//5. What will be printed to the console?
const testAsyncFunction = () =>{
  return new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) {
      resolve('Test Resolve');
    } else {
      reject('Test Reject');
  }
  }).catch((err) =>{
    console.log('Error caught in testAsyncFunction', err);
    throw new Error('Forced error');
    //catch will executes when value is less than 0.5 and testAsyncFunction returns an error
  });
};

testAsyncFunction()
  //'then' executes when value is greater than 5
  .then((res) =>{
    console.log('Response in then block: ', res);
  })
  //executes when value is less than 0.5 as testAsyncFunction returns an error
  .catch((err) => console.log('Error in catch block: ', err));

// when value > 0.5 : prints 'Response in then block:  Test Resolve'
// when value <= 0.5 : prints 'Error caught in testAsyncFunction Test Reject'
//                            'Error in catch block:  Error: Forced error'
                               