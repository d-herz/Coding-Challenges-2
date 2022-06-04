// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



//PREP
//P: an array, and a number
//R: an array consisting of the first n elements of the passed in array 
//E: take([1,2,3,4], 2 )=== [0,1]
/*
function take(arr, n){
  return arr.slice(0,n)

}
*/

function take(arr, n) {
  return arr.slice(0,n)
  
}