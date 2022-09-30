// 5-22-22

// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

function isPalindrome(line) {
  
  let str = line.toString()
  
  return str.split('').reverse().join('') === str ? true : false;
  
}


//9/30/22

//PREP
//P: a string or a number (which should be converted to a string)
//R: A boolean, true or false
//E: isPalindrom("anna") === true
/*P: psuedocode: 
function isPalindrome(line){
  reverse string (ensure a string) and check if === to original param
} */

function isPalindrome(line) {
  
  let str = line.toString().split('').reverse().join('')

  console.log(str)
  
  return str == line ? true : false
}