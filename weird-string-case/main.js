// Write a function toWeirdCase(weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.The indexing just explained is zero based, so the zero - ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' ').Spaces will only be present if there are multiple words.Words will be separated by a single space(' ').

//   Examples:
// toWeirdCase("String");//=> returns "StRiNg"
// toWeirdCase("Weird string case");//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  let arr = string.split(" ")
  let ans = "";
  // console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0){
        ans += arr[i][j].toUpperCase()
      } else {
        ans+= arr[i][j].toLowerCase()
      }
    }
    ans+= " " 
  }
  return ans.trim()
}

console.log(toWeirdCase("String")) // "StRiNg"
console.log(toWeirdCase("Weird string case")) // "WeIrD StRiNg CaSe"
console.log(toWeirdCase('This')) // "ThIs"
console.log(toWeirdCase('This is a test')) // 'ThIs Is A TeSt'