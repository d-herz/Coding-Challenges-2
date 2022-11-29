// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra", "allottee", "assessee"]) = ["abracadabra", "alote", "asese"].

//   dup(["kelless", "keenness"]) = ["keles", "kenes"].

// Strings will be lowercase only, no spaces.See test cases for more examples.

// Good luck!

function dup(arr) {
  let arr2 = arr.map(x => x.split(''))

  for (let i = 0; i < arr2.length; i++) {

    arr2[i] = arr2[i].filter((x, j, a) => x !== a[j-1])
    
  }
  return arr2.map( x => x.join(''))
  // console.log(arr2)
};


console.log(dup(["kelless", "keenness"])) //['keles','kenes']
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])) // ['Wolomolo','flodoromonlighters','chuchchi']
console.log(dup(["abracadabra", "allottee", "assessee"])) // ['abracadabra','alote','asese']