// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!

//PREP
//P: 1 integer, and 2 values (strings, booleans)
//R: an array of length n consisting of the 2 values
//E: alternate((5, true, false) === [true, false, true, false, true]
/*
P:  function alternate(n, 1val, 2val){
  declare empty array
  loop n times and add the values (alternating)
  return
}
*/

function alternate(n, firstValue, secondValue){
  
  let arr = []
  
  for(let i = 1; i<= n; i++){
    if(i % 2 !== 0){
      arr.push(firstValue)
    }else{
      arr.push(secondValue)
    }
  }
  return arr
}