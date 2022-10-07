// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"



//10-7-22

//PREP
//P: 2 strings
//R: boolean, true or false
//E: isAnagram('toffee', 'foefet') === true
/*P:
function isAnagram(test, original){
  thinking, maybe string method of includes?
}
*/

var isAnagram = function(test, original){ 
  
  let arrTest = test.toLowerCase().split('').sort().join('')
  console.log(arrTest)
  let arrOriginal= original.toLowerCase().split('').sort().join('')
  console.log(arrOriginal)
  
  return arrTest === arrOriginal ? true : false
};