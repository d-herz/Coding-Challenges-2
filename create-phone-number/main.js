// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//PREP:
//P: an array of numbers, always an array?
//R: a string formatted as a phone number
/* 
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890"
*/

function createPhoneNumber(arr){
  let area = arr.slice(0,3).join('')
  console.log(area)
  
  let pre = arr.slice(3,6).join('')
  console.log(pre)

  let final = arr.slice(6,10).join('')
  console.log(final)

  console.log(`(${area}) ${pre}-${final}`)

  return `(${area} ${pre}-${final})`

}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0])