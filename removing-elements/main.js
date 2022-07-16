
// <h1> Removing Elements </h1>
// <h2>Codewars 8Kyu 4-5-22</h2>

// <h3> Redo: 4-17-22, 4-29-22 </h3>

// <p>
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
  
// <p></p>

//7-16-22
//PREP
//P: an array
//R: an array
//E: removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) === ['Hello', 'Hello Again']

function removeEveryOther(arr){
  return arr.filter( (x, i) => i % 2 === 0)
}

//4-17-22
function removeEveryOther(arr){
//your code here
return arr.filter( (x, i) => i % 2 === 0)  
}

//holy fucking first T batman!