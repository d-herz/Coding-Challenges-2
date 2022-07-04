// DESCRIPTION:
// Write a function loopArr that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

// array - non-empty array of elements of any type;
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);
// Examples:

// loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result: [87, 45, 8, 8, 1, 5]

// loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result: [8, 8, 1, 5, 87, 45]

// ARRAYSFUNDAMENTALS

//PREP
//P: 3 params; an array, a direction, and a number (steps)
//R: an array
//E:
/*
P:   function loopArr( arr, direction, steps){
  conditional to check direction
    
}
*/

function loopArr(arr, direction, steps) {
  
  if(direction === 'left'){
    let arrL = []
    for (let i = 0; i< steps; i++){
      arrL = arr.shift()
      arr.push(arrL)
    }
  }else{
    let arrR = []
    for (let i = 0; i< steps; i++){
      arrR = arr.pop()
      arr.unshift(arrR)
    }
  }
  return arr
}




//User Sol
// function loopArr(arr,side,index){
//   let spliced;
  
//   if(side === 'left'){
//     spliced = arr.spliced(0,index)
//     arr.push(...spliced)
//   }else{
//     spliced = arr.splice(-index,index)
//     arr.unshift(...spliced)
//   }
//   return arr
// }