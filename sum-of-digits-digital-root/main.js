// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


function digiRoot(num){
 
  while (num >= 10){
    num = num.toString().split("").map( x => +x).reduce( ( acc, c) => acc+c, 0) 
  }

  return num
   
}