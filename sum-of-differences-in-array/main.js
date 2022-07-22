/* <h1> Sum of Differences in Array</h1>

<h2> Codewars 8Kyu 4-13-22 </h2>
<h3> Solved 4-28-22 </h3>

<p>
  Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
  
</p> */

//7-22-22 Solved on own today but really had to think

function sumOfDifferences(arr) {
  
  let arr1 = arr.sort((a,z) => z-a)
  
  let arr2 = []
  
  if(arr1.length > 1){
    for(let i = 0; i<arr1.length-1; i++){
      arr2[i] = arr1[i]-arr1[i+1]
    }
  }else{
    return 0
  }
  console.log(arr2)
  return arr2.reduce( ( acc, c) => acc+c )
}


//4-28-22 Solved with some help from stack overflow 
function sumOfDifferences(arr) {
  let sorty = arr.sort((a,z) => z-a)
 
  let sum = 0;
  
  for(let i = 0; i<sorty.length-1; i++){
    sum += sorty[i] - sorty[i+1]
  }
  return sum
}

//4-13-22 Did not Finish

function sumOfDifferences(arr) {
  let diff;
  
  let sorted = arr.sort( (a,b) => b-a)
  
  return sorted.forEach( (x,i) => x[i]-x[i+1])
  
  for(let i = 0; i<sorted.length; i++){
    
    diff = sorted.push(sorted[i]-sorted[i+1])
    
  }
//   let sortMap = sorted.map( (x,i) => x[i]-x[i+1])
  
//   sorted = sorted.reduce( (acc,c) => (acc-c) + c, 0)
  return diff 
}
//totally confused