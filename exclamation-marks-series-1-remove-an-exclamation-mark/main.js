// 5-14-22

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"


function remove (string) {

  let arr =  string.split('')
  
//   if (arr[arr.length-1]=== '!'){
//     return arr.slice(0,-1).join('')
//   }else{
//     return arr.join('')
//   }
  
  return arr[arr.length-1] === '!' ? arr.slice(0,-1).join('') : arr.join('')
  
}

//I used the ternary initially, but forgot to do arr[arr.length-1] to check final index (was just using arr[-1]), so the commented out stuff was just a different attempt until I realized I needed the .lenght-1