// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)


//PREP
//P: a number 
//R: a number, a summation
//E: solution(10) === 23
/*
P:  function solution(n) { 
  variable to hold sum
  loop to iterate through numbers
  conditionals
}
*/


function solution(n){
  let sum = 0;
  for(let i = 1; i < n; i++){
    if( i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum
}