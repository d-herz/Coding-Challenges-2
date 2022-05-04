//5-4-22
function sumTwoSmallestNumbers(numbers) {  
  let arr = numbers.filter( x => x> 0).sort( (a,z) => a-z)
  return arr[0] + arr[1]
}

//FT!