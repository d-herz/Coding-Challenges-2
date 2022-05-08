//Vowel Remover 5-8-22 8kyu

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
  return string.split('').filter( x => x !== 'e' && x !== 'o' && x !== 'a' && x !== 'i' && x !== 'u').join('')
}

//user solution that made me jealous; 
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }