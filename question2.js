/* 2. Declare a variable let age = 25;. Write a code using switch that will:
Print child to the console if age is less than equal to 12.
Print teen to the console if age is between 13 and 18 (inclusive).
Print adult to the console if age is above 18
*/

let age = 19;

switch(true){
  case (age<=12) : console.log("child");
  break;
  case (age>=13 && age<=18) : console.log("teen");
  break;
  case (age>18) : console.log("adult");
  break;
}