/* <h1> Sum of Positive </h1>
<h2>CodeWars 8Kyu Kata, 3/23/22</h2>


<p>
  You get an array of numbers, return the sum of all the positive   ones.
  Note: if there is nothing to sum, the sum is default to 0.

  Redid: 4-4-22, 4-20-22 
</p> */

//8-29-22 Back to better sol today

function positiveSum(arr) {
  let arrPos = arr.filter( x => x>0)
  
  return arrPos.reduce((acc,c) => acc+c,0 )
}

//7-12-22, same as first solution interestingly
function positiveSum(arr) {
  let posSum = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] > 0){
      posSum += arr[i]
    }
  }
  return posSum
}

// 4-20-22 very sim to 4-4-22
function positiveSum(arr) {
  let filt = arr.filter( x => x > 0)
  return filt.reduce( (acc,c) => acc+c, 0) 
}


// Solution from 4-4-22
function positiveSum(arr) {
  let arr2 = arr.filter( x => x > 0)
  return arr2.reduce( (acc,c) => acc + c, 0)  
}


// First solution 3-23-22
function positiveSum(arr) {
  let total = 0;
  for (i = 0; i<arr.length; i++){
    if (arr[i] > 0 ) {
      total += arr[i];
    }
  }
  return total;
}
