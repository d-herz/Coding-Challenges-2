// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//PREP
//P: an array of integers
//R: an integer
//E: findOutlier([0,1,2]) === 1
/*

P: function findOutlier(int){
  filter array, into 2 arrays (1 with all odds, and 1 with all evens)
  one should be length of 1, return that one
}
*/

function findOutlier(int){
  let oddArr = int.filter( x => x % 2 !== 0)
  let evenArr = int.filter( x => x % 2 === 0)
  
  return oddArr.length === 1 ? oddArr[0] : evenArr[0] 
}
