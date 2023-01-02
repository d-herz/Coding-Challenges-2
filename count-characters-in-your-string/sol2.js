//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty ? Then the result should be empty object literal, {}.

//P: a string or empty (anything else, number? Should I worry about stringifying?)
//R: an object listing each character and the amount of times it appears
//E
//P; charmap

function count(string) {

  if (string) {
    let charMap = {}
    for (const letter of string) {
      if (charMap[letter]) {
        charMap[letter]++
      } else {
        charMap[letter] = 1
      }
    }

    return charMap;
  } else {

    return {}
  }
}

console.log(count('aba')) // { 'a': 2, 'b': 1 }
console.log(count('')) //{}
console.log(count()) //{}