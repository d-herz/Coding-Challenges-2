// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


//PREP
//P: a number
//R: a number
//E: findSum(10) === 33 (3+5+6+9+10)
/*
P:  function findSum(n){
  let sum = 0;
  iterate from 1-n, add multiples of 3 or 5 to sum
}
*/


function findSum(n){
  
  let sum = 0;
  
  for(let i = 0; i <=n; i++){
    
    if(i % 3 === 0 || i % 5 === 0)
      
      sum += i
  }
  return sum;
}