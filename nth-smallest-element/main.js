// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 

//10-26-22 7q

//params will be an array and a number
//return the element that is the nth smallest

function nthSmallest(arr, n){
  let i = n-1
  let arr2 = arr.sort( (a, z) => a-z )
  console.log(arr2)
  return arr2[i]

}

console.log(nthSmallest([3,1,2], 2))
console.log(nthSmallest([15,20,7,10,4,3], 3))
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92], 5))

