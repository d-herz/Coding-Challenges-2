
// <h2>Codewars 8Kyu 4-5-22</h2>
// <h3> Redo: 4-17-22, 4-28-22 </h3>

// <p>
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.
  
// </p>

//7-16-22
//PREP
//P: array
//R: a number
//E: sum([1, 5.2, 4, 0, -1]) === 9.2
//P: function sum(arr){ reduce/ sum the array}

function sum (arr){
  return arr.reduce((acc, c) => acc + c, 0 )  
};


// Sum Numbers
function sum (numbers) {
  return numbers.reduce( (acc,c) => acc+c, 0)
};

//First tryyyyyy