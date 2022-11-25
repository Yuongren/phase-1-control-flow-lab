function addFive(someNumber) {
  //Everything I want my function to do I put inside these curly braces
  //In this example, let's say I want my function, addFive, to add 5 to
  //any number I pass in (someNumber), but only IF the number is greater
  //than zero:
  let result
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  //at the end, if I want my function to return something, I need to state it:
  return result
}
//once our function is declared, we can call addFive, passing in values 
//as arguments:

addFive(10);
//=> 15

addFive(20);
//=> 25

addFive(-5);
//=> undefined

addFive(addFive(5));
//=> 15!! In this case, the return value of addFive(5), 10, is passed in 
//as the argument to the outer addFive, returning 15
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400){
    return 'This one is on me!';
   }
  else if (someValue > 2000 && someValue < 2500){
    return 'I will gladly take your thirty bucks.';
   }
  else if (someValue > 2500){
    return 'No can do.';
   }
  }
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!

function ternaryCheckCity(city){
  if ( city == 'NYC'){
    return "Ok, sounds good."
   }
   else if(city != 'NYC'){
    return 'No go.'
   }
}
function switchOnCharmFromTip(tip){
  if(tip === 'generous'){
    return 'Thank you so much.'
  }
  else if(tip === 'not as generous'){
    return 'Thank you.'
  }
else {
  return 'Bye.'
 }
}