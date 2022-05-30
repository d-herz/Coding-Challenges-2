// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.


//PREP
//P: two numbers
//R: a number
//E: numToPow(4,4) === 256
/*
numToPow(num,pow) {
 do math here, loop?
}
*/

function numberToPower(num, pow){
  
  let ans =1
  
  for(let i = 1; i <= pow; i++){
    ans *= num 
  }
  return ans
}