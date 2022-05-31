// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.


function amIWilson(p) {
  let num = p-1;
  let result = num;
  if ( num === 0 || num === 1){
    return 1
  }else{
    while (num > 1){
      num--;
      result *= num;
    }
      return Number.isInteger((result+1)/(p*p))
    }
  } 


