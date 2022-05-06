//5-6-22 solution

function evenNumbers(array, number) {
  
  let filt = array.filter( x => x % 2 ===0)
  
  let splicer = filt.splice(-number)
  
  return splicer
  
}