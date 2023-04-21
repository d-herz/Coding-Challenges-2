// Write a method that takes an array of consecutive(increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array.And it will be always exactly one letter be missing.The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a', 'b', 'c', 'd', 'f'] -> 'e'
// ['O', 'Q', 'R', 'S'] -> 'P'
//     (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas.Take a look if you enjoyed this kata!


function findMissingLetter(array) {
  // Set starting character code to the first index
  let startCharCode = array[0].charCodeAt(0);

  for (let i = 1; i < array.length; i++) {
    // Set current char code to i
    let currentCharCode = array[i].charCodeAt(0);

    // if difference between both char codes > 1, we have a missing letter
    if (currentCharCode - startCharCode > 1) {
      return String.fromCharCode(startCharCode + 1);
    }
    // Else, reassign starting char code to current and repeat
    startCharCode = currentCharCode;
  }
  return null; // If no missing letter is found
}


console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])) // "e"
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) // "P"
// console.log(findMissingLetter()) // 