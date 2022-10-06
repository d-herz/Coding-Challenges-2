
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//10-6-22

//PREP:
//P: strings (2)
//R: boolean, (t or f)
//E: solution('abc', 'bc') === true
/*
P: function soultion(str, ending){
  thinking, find length of ending, use that to slice str, and check if they equal
}
*/


function solution(str, ending){
  
  let sliceAmt = str.length-ending.length
  console.log(sliceAmt)
  
  let newStr = str.slice(sliceAmt) === ending ? true : false
  console.log(newStr)
  return newStr
}

//should have used the .endsWith() method 