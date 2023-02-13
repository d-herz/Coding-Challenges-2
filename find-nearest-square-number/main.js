//2-13-23

function nearestSq(n) {

  let squareRoot = Math.sqrt(n)

  if ( n % squareRoot === 0) {
    return n
  } else {
    return (Math.round(squareRoot))**2
  }
}

console.log(nearestSq(1)) //1 
console.log(nearestSq(2)) //1
console.log(nearestSq(10)) //9
console.log(nearestSq(111)) //121 