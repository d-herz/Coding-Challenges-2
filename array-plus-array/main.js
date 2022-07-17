
// <h1>Array Plus Array</h1>

// <h2> CodeWars 8kyu 4-8-22 </h2>
// <h2> Redo: 4-14-22, 4-27-22 </h2>


// <p>
//   I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
// </p>

//7-17-22 one liner after first try
function arrayPlusArray(arr1, arr2) {
  //   let sum1 = arr1.reduce( (acc, c) => acc+c, 0)
  //   let sum2 = arr2.reduce( (acc, c) => acc+c, 0)
    
  //   return sum1 + sum2
    return (arr1.reduce( (acc, c) => acc+c, 0)) + (arr2.reduce( (acc, c) => acc+c, 0))
  }
  
  //4-27-22 improved solution
  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce( (acc,c) => acc+c,0)  
  }
  
  //4-14-22 Solution:
  function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    return arr3.reduce( (acc,c) => acc+c, 0)
  }
  
  //4-8-22 Solution
  function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce( (acc,c) => acc+c, 0)
    
    let sum2 = arr2.reduce( (acc,c) => acc+c, 0)
    
    return sum1 + sum2
  }
  
  //FIRST TRYYYY