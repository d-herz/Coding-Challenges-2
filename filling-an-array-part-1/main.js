/* <h1>Filling an Array (part1)</h2>
<h2>Codewars 8kyu 4-6-22</h2>
<h3> redo: 4-14-22, 4-28-22 </h3>

<p>

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
</p> */

//7-16-22
//PREP
//P: a number
//R: an array
//E:  arr(3) === [0,1,2]
/*
P: function arr(N){
  declare an empty array, and loop/push up to and excluding N
}
*/

//Learned that you can leave the array variable as 'arr'
const arr = N => {
  let arr1 = []
  for(let i = 0; i<N; i++){
    arr1.push(i)
  }
  return arr1
};

//4-28-22, kept provided function expression syntax
const arr = N => {
  let arrFill = []
  for(let i = 0; i<N; i++){
    arrFill.push(i)
  }
   return arrFill
};

//4-14-22 sol
function arr(N){
  let arr1 = [];
  for(let i =0; i<N; i++){
    arr1.push(i)
  }
    return arr1
}


//4-6-22 Sol
function arr(n){
  let arrFill = [];
  
  for(let i=0; i<n; i++){
    arrFill.push(i)
  }
  return arrFill
  
}