// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

function logs(x , a, b){
  
  let logA = Math.log(a)/Math.log(x)
  let logB = Math.log(b)/Math.log(x)
  return logA + logB
}


// Using Math.log() with a different base
// The following function returns the logarithm of y with base x (ie. log x y ):

// function getBaseLog(x, y) {
//   return Math.log(y) / Math.log(x);
// }