// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//   Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive.You may be given negative numbers as well (or 0 ).

// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out.Numbers go up to 2 ^ 31(or similar, depending on language).Looping all the way up to n, or n / 2, will be too slow.


// Prime means number only divisible by 1 and itself

// The simplest primality test is trial division: given an input number, n, check whether it is evenly divisible by any prime number between 2 and √n(i.e.that the division leaves no remainder).If so, then n is composite.Otherwise, it is prime.

function isPrime(num) {

  if (num == 2 || num == 3) {
    return true;
  }
  
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  
  for (let i = 5; i * i <= num; i += 6){
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}



console.log(isPrime(0)) // false
console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(73)) // true
console.log(isPrime(75)) // false
console.log(isPrime(-1)) // false
console.log(isPrime(3)) // true
console.log(isPrime(5)) // true
console.log(isPrime(103652761)) // false