/* <h1> Pick a Set of First Elements </h1>

<h2> Codewars 8kyu 4-18-22 </h2>

<p>
  Write a function to get the first elements of asequence.        Passing a parameter n (default=1) will return the first n    elements of the sequence.

  If n == 0 return an empty sequence []

  Examples
  var arr = ['a', 'b', 'c', 'd', 'e'];
  first(arr) //=> ['a'];
  first(arr, 2) //=> ['a', 'b']
  first(arr, 3) //=> ['a', 'b', 'c'];
  first(arr, 0) //=> [];
</p> */

//7-20-22

function first(arr, n=1) {
  return  n !== 0  ? arr.filter( (x, i) => i<n) : []
}

//4-18-22 No idea why this satisfied the CW kata, in the console it did not work lol

function first(arr, n = 1) {
  return arr.filter( (x,i) => [i] < n)  
}