// 5. Can you use return instead of break in loops?

//break will just break the loop and execute the further code in the function while 
//return will break the loop and will not be executing the further code in the function

function print() {
  for(let i=0;i<10;i++){
    if(i==7){
      return;
    }
    console.log(i);
  }
  console.log("Something");
}

print()