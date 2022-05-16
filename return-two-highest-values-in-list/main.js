// 5-16-22

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

//5-16-22
function twoHighest(arr) {
  let arr2 = [];
  
  if(arr.length>1){
    let sorty = arr.sort( ( a, z ) => z-a)
  
    let dupes = [...new Set(sorty)]
   
    return [dupes[0], dupes[1]]
  
  }else if( arr.length === 1){

    return [arr[0]]
    
  }else if(arr.length === 0){
    return arr2
  }
}
